import { useState,useEffect } from "react";

function Tiempo() {
    //fecha de sistema
    const[fecha,setFecha]=useState(new Date());
    //actualizar cada segundo
    useEffect(()=>{
        const intervalo=setInterval(()=> {
            setFecha(new Date());
        }, 1000);
        return()=>clearInterval(intervalo);
    },[]);
    //formato de hora
    let h=fecha.getHours();
    let m=fecha.getMinutes();
    let s=fecha.getSeconds();
    //agregar 0 si es menor a 10
    h=h<10 ? "0" +h:h;
    m=m<10 ? "0" +m:m;
    s=s<10 ? "0" +s:s;
    //agregamos formato de fecha
    let dia=fecha.getDate();
    let mes=fecha.getMonth()+1;
    let anio=fecha.getFullYear();
    //renderizar
    return(
        <div className="Tiempo">
            <p>Fecha: {dia}-{mes}-{anio}</p>
            <p>{h}:{m}:{s}</p>
        </div>
    );
}

export default Tiempo;