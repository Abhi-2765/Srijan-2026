import Razorpay from "razorpay";

export const razorpay = ()=>{
  return new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})
}