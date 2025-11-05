import express from "express";
import { registeruser, loginuser, refreshaccesstoken, logoutuser, getcurrentuser } from "../controllers/authController.js";
import { verifyJWT } from "../middleware/verifyAuthentication.js";

const useroute = express.Router();

useroute.route("/register").post(registeruser);
useroute.route("/login").post(loginuser);
useroute.route("/refresh-token").get(refreshaccesstoken);
useroute.route("/logout").post(verifyJWT,logoutuser);
useroute.route("/current-user").get(verifyJWT,getcurrentuser);

export default useroute;