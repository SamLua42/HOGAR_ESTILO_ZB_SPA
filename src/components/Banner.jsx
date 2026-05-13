import { useState, useEffect } from "react";
import Banner1 from "../assets/Banner-2.jpg"
import Banner2 from "../assets/Banner-3.jpg"
import Banner3 from "../assets/Banner-4.jpg"

function Banner() {
    const imagenes=[Banner1,Banner2,Banner3];
    const [i,setI]=useState(0);
    useEffect(()=>{
        const intervalo=setInterval(()=>{
            setI((prev)=>(prev+1)%imagenes.length);
        },2500);
        return()=>clearInterval(intervalo)
    },[]);
    return(
        <div className="Banner">
            <img src={imagenes[i]} alt="BANNER"></img>
        </div>
    )
}

export default Banner;