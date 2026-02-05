import qrData from "../models/Qrmodel.js";
import outsidedata from "../models/Outsidemodel.js";





function decode(str) {
  const shifted = Buffer.from(str, "base64").toString("utf8");
  let original = "";
  for (let i = 0; i < shifted.length; i++) {
    original += String.fromCharCode(shifted.charCodeAt(i) - 3);
  }
  return original;
}

export const allowentry =async (req, res) => {
    const { emaildata } = req.body;
    try {
        if(!emaildata){
            return res.status(400).json({ message: "Email is required" });
        }
        let email = decode(emaildata);
        let emailo=email.toLocaleLowerCase();
        let emailt=email.toUpperCase();
        // console.log("Decoded email:", email);
        let qr = await qrData.findOne({email: emailo });
        if(!qr){
            qr=await qrData.findOne({email:emailt});
        }
        let co=true;
        if (!qr) {
            return res.status(404).json({ message: "User not registered" });
        }
        // if(!(email.endsWith("@iitism.ac.in"))){
        //     co=false;
        //     const userdata= await outsidedata.findOne({email});
        //     if(userdata){
        //         co=true;
        //     }
        // }
        if(co==false){
            return res.status(400).json({message:"Non ISM mail, didn't paid"});
        }
        if(qr.entrystatus=="yes"){
            return  res.status(400).json({ message: "Already entered" });
        }
        qr.entrystatus = "yes";
        await qr.save();
        res.json({ message: "Entry allowed", data: qr });
    } catch (error) {
        res.status(500).json({ message: "Error allowing entry", error });
    }
}

export const exit =async (req, res) => {
    const { emaildata } = req.body;
    try {
        if(!emaildata){
            return res.status(400).json({ message: "Email is required" });
        }
        let email = decode(emaildata);
        let emailo=email.toLowerCase();
        let emailt=email.toUpperCase();
        // console.log("Decoded email:", email);
        let qr = await qrData.findOne({email: emailo });
        if(!qr){
            qr=await qrData.findOne({email:emailt});
        }
        // const qr = await qrData.findOne({ email });
        if (!qr) {
            return res.status(404).json({ message: "User not registered" });
        }
        if(qr.entrystatus !== "yes"){
            return  res.status(400).json({ message: "Already exited" });
        }
        qr.entrystatus = "";
        await qr.save();
        res.json({ message: "Entry exited", data: qr });
    } catch (error) {
        res.status(500).json({ message: "Error exiting entry", error });
    }
}

export const eventend = async (req, res) => {
    try {
        await qrData.updateMany({}, { entrystatus: "" });
        res.json({ message: "Event ended, all entry statuses reset" });
    } catch (error) {
        res.status(500).json({ message: "Error ending event", error });
    }
};



