import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {gsap} from "gsap";
import ImagenCapacitacion from '../imagenes/CapacitacionInfraestructuraCisco.jpg';


/*
const loadRef= React.createRef();
const mainNavRef = React.createRef();
const logoNav = React.createRef();
const navSliderRef = React.createRef();
const bannerRef = React.createRef();
const proyectRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});
*/

/*
        {state==1 && tl.from(bannerRef.current,{opacity:0, duration:0.25,ease:"power4.out"})}
        {state==2 && tl.from(proyectRef.current,{opacity:0, duration:0.25,ease:"power4.out"});}
        {state!=0 && tl.from(logoNav.current, {opacity:0, duration:0.25,ease:"power4.out"});}


        {state==0 && tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1.2});}
        {state==0 && tl.from(logoNav.current, {opacity:0, duration:1,ease:"power4.out"})}

        tl.from(mainNavRef.current,{opacity:0, duration:1,ease:"power4.out"});

        tl.from(navSliderRef.current,{opacity:0, duration:1,ease:"power4.out"});

        {state==0&&tl.from(bannerRef.current,{opacity:0, duration:1,ease:"power4.out"})}

*/

const bannerRef = React.createRef();
const contentRef = React.createRef();
const linkRef = React.createRef();
// no olvidar poner la ref linkRef en la etiqueta que leva al link Utilities en la primer condicion
var tl= gsap.timeline({repeatDelay:1});

export default function HomeBanner(props){
   
    props.state!=0?
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
                ease:"back.out(1.2)",
                delay:0
            
            });
        tl.from(contentRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    }):
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
                ease:"back.out(1.2)",
                delay:1.3
            
            });
        tl.from(contentRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
        tl.fromTo(linkRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",zIndex:"0"},{opacity:0, duration:1, ease:"back.out(1.2)",zIndex:"2"});
    });
   

    return props.state==0?(
        
     <>
            <div className="Home" >
                <div className="Content1" ref={contentRef} >
                    <div className="MainTitle">Investigacion  desarrollo </div>
                    <div className="Content">Enfocados en la apropiacion de las nuevas tecnologias de las TIC con respecto a seguridad informatica y gestion de infraestructura y su efectiva aplicacion en proyectos empresariales </div>
                </div>
                <div className="c-l-Banner" ref={bannerRef}>
                    <div className="c-l-Banner--mask"></div>
                    <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner"/>
                </div>               
            </div>
            <a ref={linkRef} style={styleBannerlink} href="#Investigacion-Desarrollo/Content" onClick={props.onHandleComponentUtility}></a>
    </>
      
    ):
        <>
            <div className="Home" >
                <div className="Content1" ref={contentRef}>
                    <div className="MainTitle">Investigacion  desarrollo </div>
                    <div className="Content">Enfocados en la apropiacion de las nuevas tecnologias de las TIC con respecto a seguridad informatica y gestion de infraestructura y su efectiva aplicacion en proyectos empresariales</div>
                </div>
                <div className="c-l-Banner"ref={bannerRef}>
                    <div className="c-l-Banner--mask"></div>
                    <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner" />
                </div>
            </div>
            <a style={styleBannerlink} href="#Investigacion-Desarrollo/Content" onClick={props.onHandleComponentUtility}></a>
        </>
  }

  const styleBannerlink ={
    position:"absolute",
    top:"35%",
    right:"20%",
    zIndex:300,
    background:"#95B6DE",
    width:"30%",
    height:"35%",
    opacity:"0",

  }

