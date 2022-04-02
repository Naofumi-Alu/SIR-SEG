
import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import LogoLoad from '../LogoLoad.svg';
import ListNavMain from './listNavMain';
import {gsap} from "gsap";

const logoNav = React.createRef();
const navRef = React.createRef();

var tl= gsap.timeline({repeatDelay:0});



export default function Navigation(props){

  

   props.state!=0?
   useEffect(() => {
    tl.set(logoNav.current,{opacity:0 , duration:0, ease:"back.out(1.2)"});
    tl.to(logoNav.current,{opacity:1 , duration:0.28, ease:"back.out(1.2)"});

   }):

   useEffect(() => {
    tl.from(logoNav.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1});
    tl.from(navRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1});
   });

  
   
  
   
    return props.state==0?(
        <>
            <a href="#" ref={logoNav}>
                    <LogoLoad className="c-l-logoNav"/>
            </a>
            <div ref={navRef}>
                <ListNavMain
                    stateList={props.state}
                    toggleComponentHomeListNav={props.toggleComponentHome}
                    toggleComponentProyectListNav={props.toggleComponentProyect} 
                />
            </div>
            
        </>
    ):
       <>
            <a href="#" >
                    <LogoLoad className="c-l-logoNav"/>
            </a>
            <div ref={navRef}>
              <ListNavMain
              stateList={props.state}
              toggleComponentHomeListNav={props.toggleComponentHome}
              toggleComponentProyectListNav={props.toggleComponentProyect}
              />
            </div>
            
        </>
}
