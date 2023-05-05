import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from './database.js';
import { name } from 'ejs';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server running")
})
//user data server//
app.post('/register/:name/:gmail/:password/:cpassword',async(req,res)=>{
    const details=await db.collection('userdata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
app.get('/check/:gmail',async(req,res)=>
{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:mail/:password',async(req,res)=>{
    const details=await db.collection('userdata').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/update/:name/:gmail/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('userdata').updateOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
// Admin data server//
app.get('/adminlogin/:mail/:password',async(req,res)=>{
    const details=await db.collection('admindata').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.get('/admincheck/:gmail',async(req,res)=>
{
    const details=await db.collection('admindata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.post('/adminregister/:name/:gmail/:password/:cpassword',async(req,res)=>{
    const details=await db.collection('admindata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
//game data//
app.post('/coding/:question/:answer',async(req,res) => {
    const details = await db.collection('codingdata').insertOne({question:req.params.question,answer:req.params.answer});
    res.json(details);
})
app.post('/sports/:id/:answer',async(req,res) => {
    const details = await db.collection('sportsdata').insertOne({_id:req.params.id,answer:req.params.answer});
    res.json(details);
})
app.post('/current/:question/:answer',async(req,res) => {
    const details = await db.collection('cafdata').insertOne({question:req.params.question,answer:req.params.answer});
    res.json(details);
})
app.post('/entertine/:id/:answer',async(req,res) => {
    const details = await db.collection('entrdata').insertOne({_id:req.params.id,answer:req.params.answer});
    res.json(details);
})
//delete data//
app.get('/delete',async(req,res)=>{
    const details=await db.collection('entrdata').deleteMany()
    .then((result)=>
    {
        console.log("sucesslly delete all data in userdata base");
    })
    res.json(details);
})
 connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})