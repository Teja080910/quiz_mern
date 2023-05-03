import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from './database.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server running")
})
app.post('/register/:name/:gmail/:password',async(req,res)=>{
    const details=await db.collection('userdata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password})
    res.json(details);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})