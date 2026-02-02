import mongoose from "mongoose";


const qrschema = new mongoose.Schema({
    email: String,
    entrystatus: {
        type: String,
        default: ""
    }
});



const qrData = mongoose.model("QrData", qrschema);


export default qrData;