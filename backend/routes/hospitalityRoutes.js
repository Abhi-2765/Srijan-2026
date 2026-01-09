import express from "express";
import { sendpackageinfo,userpackages,verifySignature } from "../controllers/hospilalityController.js";
import { verifyJWT } from "../middleware/verifyAuthentication.js";

const hospitalityrouter = express.Router();

hospitalityrouter.route("/packageinfo").get(verifyJWT, sendpackageinfo);
hospitalityrouter.route("/changeuserpackage").post(verifyJWT, userpackages);
hospitalityrouter.route("/verifySignature").post(verifyJWT, verifySignature);

export default hospitalityrouter;