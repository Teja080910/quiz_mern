import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './database.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server running")
})
//user data server//
app.post('/register/:name/:gmail/:password',async(req,res)=>{
    const details=await db.collection('userdata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password})
    res.json(details);
})
app.post('/check/:gmail',async(req,res)=>
{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.post('/login/:gmail/:password',async(req,res)=>{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('userdata').findOneAndUpdate({gmail:req.params.gmail},{$set:{password:req.params.password,cpassword:req.params.cpassword}})
    res.json(details);
})
//headbar//
app.post('/headcheck/:name',async(req,res)=>
{
    const details=await db.collection('userdata').findOne({name:req.params.name});
    res.json(details);
})
// Admin data server//
app.post('/adminlogin/:mail/:password',async(req,res)=>{
    const details=await db.collection('admindata').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/admincheck/:gmail',async(req,res)=>
{
    const details=await db.collection('admindata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.post('/adminregister/:name/:gmail/:password/:cpassword',async(req,res)=>{
    const details=await db.collection('admindata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
//game input data//

//coding game//
app.post('/coding/:question/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('codingdata').insertOne({question:req.params.question,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/codingans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/coding/:question',async(req,res)=>{
    const details=await db.collection('codingdata').findOne({question:req.params.question})
    res.json(details);
})
app.post('/coding',async(req,res)=>{
    const details=await db.collection('codingdata').find().toArray()
    res.json(details);
})
app.post('/codingcheckans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    console.log(details)
    res.json(details);
})
app.post("/codingboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('codingscore').findOneAndUpdate({gmail:req.params.gmail},{name:req.params.name,score:req.params.score})
    res.json(details);
})
app.post("/codingboard/:name",async(req,res)=>{
    const details=await db.collection('codingscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.post('/codingboard',async(req,res)=>{
    const details=await db.collection('codingscore').find().sort({score:1}).toArray()
    res.json(details);
})


//sports game//
app.post('/sports/:id/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('sportsdata').insertOne({_id:req.params.id,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/sportsans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/sports/:id',async(req,res)=>{
    const details=await db.collection('sportsdata').findOne({_id:req.params.id})
    res.json(details);
})
app.post('/sports',async(req,res)=>{
    const details=await db.collection('sportsdata').find().toArray()
    res.json(details);
})
app.post('/sportscheckans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
app.post("/sportsboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('sportsscore').findOneAndUpdate({gmail:req.params.gmail,name:req.params.name},{score:req.params.score})
    res.json(details);
})
app.post("/sportsboard/:name",async(req,res)=>{
    const details=await db.collection('sportsscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.post('/sportsboard',async(req,res)=>{
    const details=await db.collection('sportsscore').find().sort({score:-1}).toArray()
    res.json(details);
})



//current affair game//
app.post('/current/:question/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('cafdata').insertOne({question:req.params.question,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/currentans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/current/:question',async(req,res)=>{
    const details=await db.collection('cafdata').findOne({question:req.params.question})
    res.json(details);
})
app.post('/current',async(req,res)=>{
    const details=await db.collection('cafdata').find().toArray()
    res.json(details);
})
app.post('/currentcheckans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
// app.post('/currentans',async(req,res)=>{
//     const details=await db.collection('answersdata').find().toArray()
//     res.json(details);
// })
app.post("/currentboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('currentscore').findOneAndUpdate({gmail:req.params.gmail,name:req.params.name},{score:req.params.score})
    res.json(details);
})
app.post("/currentboard/:name",async(req,res)=>{
    const details=await db.collection('currentscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.post('/currentboard',async(req,res)=>{
    const details=await db.collection('currentscore').find().sort({score:1}).toArray()
    res.json(details);
})




//entertinment game//
app.post('/entertine/:id/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('entrdata').insertOne({_id:req.params.id,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/entertineans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/entertine/:id',async(req,res)=>{
    const details=await db.collection('entrdata').findOne({_id:req.params.id})
    res.json(details);
})
app.post('/entertine',async(req,res)=>{
    const details=await db.collection('entrdata').find().toArray()
    res.json(details);
})
app.post('/entertinecheckans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
app.post("/entertineboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('entertinescore').findOneAndUpdate({gmail:req.params.gmail,name:req.params.name},{score:req.params.score})
    res.json(details);
})
app.post("/entertineboard/:name",async(req,res)=>{
    const details=await db.collection('entertinescore').findOne({gmail:req.params.name})
    res.json(details);
})
app.post('/entertineboard',async(req,res)=>{
    const details=await db.collection('entertinescore').find().toArray()
    res.json(details);
})


//delete data//
app.post('/delcoding',async(req,res)=>{
    const details=await db.collection('codingscore').deleteMany()
   res.json(details)
})
app.post('/delcurrent',async(req,res)=>{
    const details=await db.collection('currentscore').deleteMany()
   res.json(details)
})
app.post('/delsports',async(req,res)=>{
    const details=await db.collection('sportsscore').deleteMany()
   res.json(details)
})
app.post('/delentertine',async(req,res)=>{
    const details=await db.collection('entertinescore').deleteMany()
   res.json(details)
})
 connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})