import mongoose from "mongoose";


const qrschema = new mongoose.Schema({
    email: String,
    entrystatus: {
        type: Boolean,
        default: false
    }
});



const qrData = mongoose.model("QrData", qrschema);


export default qrData;