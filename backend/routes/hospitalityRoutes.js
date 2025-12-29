import express from "express";
import { sendpackageinfo,userpackages } from "../controllers/hospilalityController.js";
import { verifyJWT } from "../middleware/verifyAuthentication.js";

const hospitalityrouter = express.Router();

hospitalityrouter.route("/packageinfo").get(verifyJWT, sendpackageinfo);
hospitalityrouter.route("/changeuserpackage").post(verifyJWT, userpackages);


export default hospitalityrouter;