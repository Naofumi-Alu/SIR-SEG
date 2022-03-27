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
var tl= gsap.timeline({repeatDelay:0});

export default function HomeBanner(props){
    
    props.state!=0?useEffect(() => {
        tl.from(bannerRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
    }):
    useEffect(() => {
        tl.from(bannerRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:2});
    });
    
    
    return props.state==0?(
        
        <div className="Home" ref={bannerRef}>
            <div className="Content1" >
                <div className="MainTitle">Investigacion  desarrollo </div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner" />
            </div>
        </div>
      
    ):
        
        <div className="Home" ref={bannerRef}>
            <div className="Content1" >
                <div className="MainTitle">Investigacion  desarrollo </div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner" />
            </div>
        </div>
  }


