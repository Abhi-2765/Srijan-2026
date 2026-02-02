import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import userrouter from './routes/userRoutes.js';
import eventrouter from './routes/eventRoutes.js';
import  errorHandler  from './middleware/errorMiddleware.js';
import hospitalityrouter from './routes/hospitalityRoutes.js';
import paymentRoutes from "./routes/paymentRoutes.js";
import merchrouter from './routes/merchrouter.js';
import qrrouter  from "./routes/qrRoutes.js";



const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN || "*",
  credentials:true
}));


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("trust proxy", 1);

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later."
  }));
  app.use(express.static("public"));
  app.use(express.urlencoded({extended:true , limit: "16kb"}));
  app.use(cookieParser());


  // Routes
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Srijan API' });
  });

  app.use("/api/v1/user",userrouter);
  app.use("/api/v1/event", eventrouter);
  app.use("/api/v1/hospitality", hospitalityrouter);
  app.use("/api/v1/payments", paymentRoutes);
  app.use("/api/v1/merchandise",merchrouter);
  app.use("/api/v1/qr",qrrouter);

  app.use(errorHandler);

  app.use("/api/payments", paymentRoutes);

  app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
  });


  const PORT = process.env.PORT || 5000;

  connectDB()
  .then(()=>{
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }).catch((error)=>{
    console.error("Failed to connect to the database", error);
  });
