import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from './database.js';
import { name } from 'ejs';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server running")
})
app.post('/register/:name/:gmail/:password/:cpassword',async(req,res)=>{
    const details=await db.collection('userdata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
app.get('/login',async(req,res)=>{
    const details=await db.collection('userdata').find().toArray();
    // res.send(details);
    res.json(details);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})