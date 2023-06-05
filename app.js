import express from "express";
import dotenv from "dotenv";
import userRouters from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";


dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {
res.send("Testing api");
});

app.use('/api/user',userRouters);
const port = 8080;

app.listen(
    port,
    console.log("server testing")

);