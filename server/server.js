import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";


//create expres app and http request
const app=express();
const server=http.createServer(app);

//Middleware setup
app.use(express.json({limit:"4mb"}));//4mb limit maximum 4 mb
app.use(cors());

app.use("/api/status",(req,res)=>res.send("server is live "));

const PORT=process.env.PORT||5000;
server.listen(PORT,()=>console.log("Server is running on PORT :"+PORT));