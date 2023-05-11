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
app.get('/login/:gmail/:password',async(req,res)=>{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('userdata').findOneAndUpdate({gmail:req.params.gmail},{$set:{password:req.params.password,cpassword:req.params.cpassword}})
    res.json(details);
})
//headbar//
app.get('/headcheck/:name',async(req,res)=>
{
    const details=await db.collection('userdata').findOne({name:req.params.name});
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
//game input data//
app.post('/coding/:question/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('codingdata').insertOne({question:req.params.question,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/sports/:id/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('sportsdata').insertOne({_id:req.params.id,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/current/:question/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('cafdata').insertOne({question:req.params.question,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
app.post('/entertine/:id/:answer1/:answer2/:answer3',async(req,res) => {
    const details = await db.collection('entrdata').insertOne({_id:req.params.id,answer1:req.params.answer1,answer2:req.params.answer2,answer3:req.params.answer3});
    res.json(details);
})
//input answer//
app.post('/codingans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/currentans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/sportsans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
app.post('/entertineans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').insertOne({correct_answer:req.params.canswer});
    res.json(details);
})
//find game data//
app.get('/coding/:question',async(req,res)=>{
    const details=await db.collection('codingdata').findOne({question:req.params.question})
    res.json(details);
})
app.get('/entertine/:id',async(req,res)=>{
    const details=await db.collection('entrdata').findOne({_id:req.params.id})
    res.json(details);
})
app.get('/sports/:id',async(req,res)=>{
    const details=await db.collection('sportsdata').findOne({_id:req.params.id})
    res.json(details);
})
app.get('/current/:question',async(req,res)=>{
    const details=await db.collection('cafdata').findOne({question:req.params.question})
    res.json(details);
})
app.get('/coding',async(req,res)=>{
    const details=await db.collection('codingdata').find().toArray()
    res.json(details);
})
app.get('/current',async(req,res)=>{
    const details=await db.collection('cafdata').find().toArray()
    res.json(details);
})
app.get('/sports',async(req,res)=>{
    const details=await db.collection('sportsdata').find().toArray()
    res.json(details);
})
app.get('/entertine',async(req,res)=>{
    const details=await db.collection('entrdata').find().toArray()
    res.json(details);
})

//answer data//
app.get('/codingans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
app.get('/currentans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
app.get('/sportsans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
app.get('/entertineans/:canswer',async(req,res) => {
    const details = await db.collection('answersdata').findOne({correct_answer:req.params.canswer})
    res.json(details);
})
//score data//
app.post("/codingboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('codingscore').insertOne({gmail:req.params.gmail,name:req.params.name,score:req.params.score})
    res.json(details);
})
app.post("/currentboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('currentscore').insertOne({gmail:req.params.gmail,name:req.params.name,score:req.params.score})
    res.json(details);
})
app.post("/sportsboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('sportsscore').insertOne({gmail:req.params.gmail,name:req.params.name,score:req.params.score})
    res.json(details);
})
app.post("/entertineboard/:gmail/:name/:score",async(req,res)=>{
    const details=await db.collection('entertinescore').insertOne({gmail:req.params.gmail,name:req.params.name,score:req.params.score})
    res.json(details);
})
app.get("/codingboard/:name",async(req,res)=>{
    const details=await db.collection('codingscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.get("/currentboard/:name",async(req,res)=>{
    const details=await db.collection('currentscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.get("/sportsboard/:name",async(req,res)=>{
    const details=await db.collection('sportsscore').findOne({gmail:req.params.name})
    res.json(details);
})
app.get("/entertineboard/:name",async(req,res)=>{
    const details=await db.collection('entertinescore').findOne({gmail:req.params.name})
    res.json(details);
})
// leader bord//
app.get('/codingboard',async(req,res)=>{
    const details=await db.collection('codingscore').find().sort({score:1}).toArray()
    res.json(details);
})
app.get('/currentboard',async(req,res)=>{
    const details=await db.collection('currentscore').find().toArray()
    res.json(details);
})
app.get('/sportsboard',async(req,res)=>{
    const details=await db.collection('sportsscore').find().toArray()
    res.json(details);
})
app.get('/entertineboard',async(req,res)=>{
    const details=await db.collection('entertinescore').find().toArray()
    res.json(details);
})
//delete data//
app.get('/delete1234',async(req,res)=>{
    const details=await db.collection('currentscore').deleteMany()
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