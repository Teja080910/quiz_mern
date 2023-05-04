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
app.get('/login/:mail/:password',async(req,res)=>{
    const details=await db.collection('userdata').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/sample/:question/:answer',async(req,res) => {
    const details = await db.collection('codingdata').insertOne({question:req.params.question,answer:req.params.answer
    });
    res.json(details);
})
 connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})