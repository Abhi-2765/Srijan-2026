import mongoose from "mongoose";


const outsideschema = new mongoose.Schema({
    email: String
});



const outsidedata = mongoose.model("Outsidedata", outsideschema);


export default outsidedata;