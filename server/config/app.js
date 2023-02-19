import express from "express";
import cors from "cors";
import path from 'path';



const app = express();

const __dirname = path.resolve();
const imagePath = path.join(__dirname, 'static');

app.use("/static",express.static(imagePath));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

export default app;