import mongoose from "mongoose";
import {User} from "../models/UserModel.js";
import { razorpay } from "../config/razorpay.js";


const sendmerchinfo = async (req, res) => {
  try {
    const data = await mongoose.connection
      .collection("merchandise")
      .findOne({});

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch merchandise info",
      error: error.message
    });
  }
};

const usermerchandise = async (req, res) => {
    let {pack,size,quantity,amount} = req.body;
    let userid=req.user._id;
    if(!pack || !size || !quantity || !amount){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
    if(pack!=="tshirt"&&pack!=="hoodie"&&pack!=="tshirt+hoodie"){
        return res.status(400).json({
            success: false,
            message: "Wrong package entered"
        })
    }
    if(size!=="XXXS"&&size!=="XXS"&&size!=="XS"&&size!=="S"&&size!=="M"&&size!=="L"&&size!=="XL"&&size!=="XXL"&&size!=="XXXL"){
        return res.status(400).json({
            success:false,
            message:"Wrong size entered"
        });
    }
    let data,user,RazopayOrder;
    try{
        data = await mongoose.connection
        .collection("merchandise")
        .findOne({});
        if(!data){
            return res.status(400).json({success:false,message:"Merchandise not found"});
        }
        user=await User.findById(userid);
        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }
    }
    catch(err){
        return res.status(500).json({success:false,message:"Cannot fetch merchandise info",error:err.message});
    }
    try{        
        if(data[pack].price * quantity != amount){
            return res.status(400).json({success:false,message:"Amount mismatch"});
        }
    }
    catch(err){
        return res.status(500).json({success:false,message:"Error in processing merchandise info",error:err.message});
    }

    const option={
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}_${quantity}`,
    }
    try{
        RazopayOrder= await razorpay().orders.create(option);
    }
    catch(err){
        return res.status(500).json({success:false,message:"Error in creating order",error:err.message});
    }
    try{
        const merchOrder={
            pack:pack,
            size:size,
            quantity:quantity,
            orderid:RazopayOrder.id,
            paid:false,
            delivered:false
        };
        
        user.merchandise_package.push(merchOrder);
        await user.save();
        return res.status(200).json({success:true,message:"Order created successfully",orderid:RazopayOrder.id});
    }
    catch(err){
        return res.status(500).json({success:false, message:"Error saving user",error:err.body});
    }
};


export {sendmerchinfo,usermerchandise};