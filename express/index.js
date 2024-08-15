import express from 'express';
var app = express();
var port = 3000;
app.listen(3000,()=>{
    console.log("You are listenning to port 3000");
})