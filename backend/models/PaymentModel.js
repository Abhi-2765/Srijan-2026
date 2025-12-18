import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema({
    paymentId: String,
    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    }

    }
);


// Prevent duplicate successful payments for same order
paymentSchema.index({ razorpayOrderId: 1, status: 1 });


const Payment = mongoose.model("Payment", paymentSchema);


export default Payment;