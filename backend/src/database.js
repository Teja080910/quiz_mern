import dev from 'dotenv';
import { MongoClient } from "mongodb";
dev.config();
let db; 
async function connectToDB(cb){
    const url =`${process.env.database}`;
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("quizapp");
    cb();
}

export { connectToDB, db };

