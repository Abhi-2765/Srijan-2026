import qrData from "../models/Qrmodel.js";
// import bcrypt from "bcrypt";



export const allowentry =async (req, res) => {
    const { email } = req.body;
    try {
        if(!email){
            return res.status(400).json({ message: "Email is required" });
        }
        const qr = await qrData.findOne({ email });
        if (!qr) {
            return res.status(404).json({ message: "User not registered" });
        }
        if(qr.entrystatus){
            return  res.status(400).json({ message: "Already entered" });
        }
        qr.entrystatus = true;
        await qr.save();
        res.json({ message: "Entry allowed", data: qr });
    } catch (error) {
        res.status(500).json({ message: "Error allowing entry", error });
    }
}

export const exit =async (req, res) => {
    const { email } = req.body;
    try {
        if(!email){
            return res.status(400).json({ message: "Email is required" });
        }
        const qr = await qrData.findOne({ email });
        if (!qr) {
            return res.status(404).json({ message: "User not registered" });
        }
        if(!qr.entrystatus){
            return  res.status(400).json({ message: "Already exited" });
        }
        qr.entrystatus = false;
        await qr.save();
        res.json({ message: "Entry exited", data: qr });
    } catch (error) {
        res.status(500).json({ message: "Error exiting entry", error });
    }
}

export const eventend = async (req, res) => {
    try {
        await qrData.updateMany({}, { entrystatus: false });
        res.json({ message: "Event ended, all entry statuses reset" });
    } catch (error) {
        res.status(500).json({ message: "Error ending event", error });
    }
};

const sendqrinfomail= async(req,res)=>{

}




