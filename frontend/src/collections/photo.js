import { initializeApp } from "firebase/app";
import 'firebase/storage';
import React, { useState } from "react";
import Headbar from "./head/head";
import { deleteObject, getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { ref } from "firebase/storage";
import {v4} from 'uuid';
export const Sample=()=>
{
    const [file, sfile] = useState([]);
    const [img,simg]=useState([]);
    const firebaseConfig = {
        apiKey: "AIzaSyAaEvjgv4XbBUKHu27epAPnBTTwgAym_y8",
        authDomain: "teja-projects.firebaseapp.com",
        projectId: "teja-projects",
        storageBucket: "teja-projects.appspot.com",
        messagingSenderId: "354461841343",
        appId: "1:354461841343:web:a692f85cfcb00b9a57930a",
    };
    const app = initializeApp(firebaseConfig);
    const imgdb = getStorage(app);
    const Upload=async()=>
    {
        const imgref=ref(imgdb,`files/${v4()}`);
        uploadBytes(imgref,file).then((val)=>
        {
            console.log(imgref.name)
            getDownloadURL(val.ref).then((url)=>
            {
                simg(url)
                console.log(url,img)
            })
        })
    }
    const Delete=async()=>
    {
        const storage = getStorage();
        const desertRef=ref(storage,`files/${file.name}`)
        getDownloadURL(desertRef).then((url1)=>
        {
            console.log(url1)
            deleteObject(url1)
        .then(()=>
        {
            alert("Deleted");
        })
        .catch(()=>
        {
            alert("Ok cool");
        })
        })
        
    }
    return(
        <>
        <Headbar/>
        <div style={{height:'83.5vh'}}>
            <input type="file" onChange={(e)=>{sfile(e.target.files[0])}}/>
            <button onClick={Upload}>Upload</button>
            <img src={img} width="50%" height="50%"></img>
            <br/>
            <button onClick={Delete}>delete</button>
        </div>
        </>
    )
}