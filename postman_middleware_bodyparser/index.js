import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url))
const port=3000;

var valid = false;

app.use(bodyParser.urlencoded({extended: true}));

function check(req,res,next){
    const password = req.body["password"];
    if (password =="ILoveProgramming"){
        valid=true;
    }
    next();
}

app.use(check);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(port,()=>{
    console.log("You are listening on port 3000")
})