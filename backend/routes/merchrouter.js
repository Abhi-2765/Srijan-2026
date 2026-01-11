import express from "express";
import { verifyJWT } from "../middleware/verifyAuthentication.js";
import { sendmerchinfo, usermerchandise } from "../controllers/merchController.js";

const merchrouter= express.Router();

merchrouter.route("/getmerchinfo").get(verifyJWT,sendmerchinfo);
merchrouter.route("/merchpaymentorder").post(verifyJWT,usermerchandise);

export default merchrouter;
