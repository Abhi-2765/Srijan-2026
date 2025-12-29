import mongoose from "mongoose";
import {User} from "../models/UserModel.js";

const sendpackageinfo = async (req, res) => {
  try {
    const data = await mongoose.connection
      .collection("hospitality_pass")
      .findOne({});

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch package info",
      error: error.message
    });
  }
};

const userpackages = async (req, res) => {
    let {packag,star_night} = req.body;
    if(!packag){
        return res.status(400).json({success:false,message:"Package is required"});
    }
    if(packag!="three-day-without-food" && packag!="three-day-with-food" && packag!="two-day-without-food" && packag!="two-day-with-food" && packag!="one-day-without-food" && packag!="one-day-with-food"){
        return res.status(400).json({success:false,message:"Invalid package"});
    }
    if(!star_night){
        star_night=false;
    }
    if(packag=="three-day-with-food" || packag=="three-day-without-food"){
        star_night=true;
    }
    try {
        const user= await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});

        }
        user.star_night=star_night||false;
        user.hospitality_package=packag;
        await user.save();
        return  res.status(200).json({success:true,message:"User package updated successfully"});
    }
    catch(err){
        return res.status(500).json({success:false,message:"Cannot update user package",error:err.message});
    }
}

export { sendpackageinfo, userpackages };