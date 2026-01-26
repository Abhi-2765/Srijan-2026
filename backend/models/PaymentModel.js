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



const Payment = mongoose.model("Payment", paymentSchema);


export default Payment;