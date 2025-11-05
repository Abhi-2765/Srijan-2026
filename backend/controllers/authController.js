import { asynchandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/apierror.js"
import { User } from "../models/UserModel.js";
import ApiResponse from "../utils/apiresponse.js";
import { verifyJWT } from "../middleware/verifyAuthentication.js";
import jwt from "jsonwebtoken";

const generateaccessandrefreshtoken=async(userid)=>{
    try{
    const user=await User.findById(userid);
    const accestoken=user.generateaccesstoken();
    const refreshtoken=user.generateRefreshToken();
    user.refreshtoken=refreshtoken;
    await user.save({validateBeforeSave:false});
    return {accestoken,refreshtoken};
}
catch(error){
    throw new ApiError(500,"Something went wrong while generating refresh and access token");
}
}


const registeruser = asynchandler(async (req, res, next) => {
  const {
    fullname,
    email,
    password,
    mobilenumber,
    ism_member
  } = req.body;

  if ([fullname, email, password, mobilenumber].some(field => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  if(ism_member==null){
    throw new ApiError(400, "ISM Member or not is required field");
  }

  if(ism_member==true){
    const ismEmailPattern = /^[a-zA-Z0-9._%+-]+@iitism\.ac\.in$/;
    if (!ismEmailPattern.test(email)) {
      throw new ApiError(400, "For ISM members, please use your institutional email (@iitism.ac.in)");
    }
  }
  if (password.length < 8) {
    throw new ApiError(400, "Password must be at least 8 characters long");
  }

  if(mobilenumber.length!=10 || !/^\d{10}$/.test(mobilenumber)){
    throw new ApiError(400, "Mobile number must be valid a 10 digit number");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    throw new ApiError(400, "Password must include a special character");
  }

  const existuser = await User.findOne({
    $or: [{ mobilenumber }, { email }],
  });

  if (existuser) {
    throw new ApiError(409, "User already exists");
  }


  const user = await User.create({
    fullname,
    email,
    password,
    mobilenumber,
    ism_member
  });

  const createduser = await User.findById(user._id).select("-password -refreshToken");

  if (!createduser) {
    throw new ApiError(500, "Something went wrong while signing up");
  }

  return res.status(201).json(
    new ApiResponse(200, createduser, "User registered successfully")
  );
});

const loginuser=asynchandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    const user=await User.findOne({
        email:email
    });
    if(!user){
        throw new ApiError(400,"User does not exist");
    }
    const correctpassword=await user.isPasswordCorrect(password);
    if(!correctpassword){
        throw new ApiError(401,"Incorrect password");
    }
    const {accestoken,refreshtoken}=await generateaccessandrefreshtoken(user._id);
    const loggedinuser=await User.findById(user._id).select("-password -refreshtoken");
    const option={
        httpOnly:true,
        secure:true,
        sameSite: "None",
    }
    return res.status(200).cookie("accesstoken",accestoken,option).cookie("refreshtoken",refreshtoken,option)
    .json(
        new ApiResponse(200,{
                user:loggedinuser,
                accesstoken:accestoken,
                refreshtoken:refreshtoken
            },
        "User logged in succesfully")
    )
});

const logoutuser=asynchandler(async(req,res)=>{
await User.findByIdAndUpdate(
        
        req.user._id,
        {
            $unset:{
                refreshtoken: ""
            }
        },
            {
                new:true        
            }
    )

    const options={
            httpOnly:true,     
            secure:true,
            sameSite: "None"
        }
        res.status(200).clearCookie("accesstoken",options).clearCookie("refreshtoken",options).json(new ApiResponse(200,{},"User logged out successfully"))
})



const refreshaccesstoken=asynchandler(async(req,res)=>{
    const incomingrefreshToken= req.cookies.refreshtoken || req.body.refreshtoken;
    if(!incomingrefreshToken){
        throw new ApiError(401,"Unauthorized request");
    }
    try {
        const decodedtoken=jwt.verify(
        incomingrefreshToken, process.env.REFRESH_TOKEN_SECRET);
    
        const user=await User.findById(decodedtoken?._id);
        if(!user){
            throw new ApiError(401,"Unauthorized request");
        }
        if(incomingrefreshToken!== user?.refreshtoken){
            throw new ApiError(401,"Invalid refresh token");
        }
        const options={
            httpOnly:true,
            secure:true,
            sameSite: "None"
        }
    
       const{accesstoken,refreshtoken}=await generateaccessandrefreshtoken(user._id);
       return res.status(200).cookie("accessToken",accesstoken,options).cookie("refreshtoken",refreshtoken,options)
       .json(new ApiResponse(200,{accesstoken,refreshtoken},"Access Token refreshed"));
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid refresh token");
    }
})


const getcurrentuser=asynchandler(async(req,res)=>{
    return res.status(200).json(new ApiResponse(200,req.user,"Current user fetched ssuccessfully"));
})

export {registeruser,refreshaccesstoken,loginuser,logoutuser,getcurrentuser};
