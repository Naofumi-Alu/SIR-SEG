import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {gsap} from "gsap";
import ImagenUniCund from '../imagenes/UniversidadCundinamarca.jpg';



const contentRef = React.createRef();
const bannerRef = React.createRef();
const prevRef = React.createRef();

var tl= gsap.timeline({repeatDelay:0});
var tl2=gsap.timeline({repeatDelay:0});


const styleMargin = {
    marginTop:"5%"
  };

const image={
    opacity:0.2
}

export default function NuestrosProyectos(props){
    props.state==2?
    useEffect(() => {
      
        tl.fromTo(bannerRef.current, 
        {
            
            duration:0,
            scale:0.7,
            opacity:0
        },
        {
            
            duration:1,
            scale:1,
            opacity:1,
            ease:"back.out(1.2)"
        
        });
        /*tl2.fromTo(contentRef.current,
        {
            x:-1000, 
            duration:0
        },
        {
            x:0 ,
            duration:1,
            ease:"back.out(1.2)"
        });
        */
        tl.from(contentRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    }):
    props.state==3&&
    useEffect(() => {
        //tl.from(proyectRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
        tl2.fromTo(prevRef.current, {y:100, duration:1},{y:0,duration:1,opacity:0});
    });
    

    return props.state==3?(
        <div className="Home">
            <div className="Content1">
                <div className="MainTitle">Nuestros Proyectos</div>
                <div className="Content" style={styleMargin} >nuestros proyectos son fuertemente centrados en la investigacion de segurida dinformtatica e infraestructura de redes para la aplicacion correspondiente en proyectos e inovaciones de l amano de sectores empresariales y entidades aliadas</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask" style={image}></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenUniCund} alt="Images of banner" />
            </div>
        </div>
    ):props.state==2&&
        <div className="Home">
            <div className="Content1" ref={contentRef}>
                <div className="MainTitle">Nuestros Proyectos</div>
                <div className="Content" style={styleMargin}>nuestros proyectos son fuertemente centrados en la investigacion de segurida dinformtatica e infraestructura de redes para la aplicacion correspondiente en proyectos e inovaciones de l amano de sectores empresariales y entidades aliadas</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask" style={image}></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenUniCund} alt="Images of banner" />
            </div>
        </div>

  }


