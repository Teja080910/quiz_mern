import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Photo=()=>
{
    // const [images, simages] = useState([]);
    const[data,sdata]=useState([]);
    // const Upload=async()=>
    // {
    //     const res=await axios.post("http://localhost:8000/currentans/"+images)
    //     if(res.data)
    //     {
    //         alert("insert")
    //     }
    // }
    useEffect(()=>
    {
        axios.get("http://localhost:8000/currentans")
        .then((result)=>
        {
            console.log(result.data)
            sdata(result.data)
        })
    },[])
    return(
        <>
        <div className='post'>
        {
            data.map((teja)=>(
                <p>{teja.correct_answer}</p>
            ))}
        </div>
        </>
    )
}
export default Photo;