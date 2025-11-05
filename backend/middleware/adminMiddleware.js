import { ApiError } from "../utils/apierror.js";
import { asynchandler } from "../utils/asynchandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

export const isAdmin = asynchandler(async(req, res, next) => {
    try {
       
        
        const token = req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ", "");
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    
        if (!user || !user.is_admin) {
            
            throw new ApiError(401, "Invalid Access Token or not a admin");
        }
    
        req.user = user;
        
        
        next();
    } catch (error) {
        
        
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})