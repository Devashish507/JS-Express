import express from "express"
const t=express();
const port = 3000;

t.get("/",(req,res)=>{
    console.log(req)
})

t.listen(3000,()=>{
    console.log(`you are running on port ${port}`);
})