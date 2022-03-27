
import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import LogoLoad from '../LogoLoad.svg';
import {gsap} from "gsap";

const logoNav = React.createRef();
const mainNavRef = React.createRef();

var tl= gsap.timeline({repeatDelay:0});


export default function Navigation(props){

   props.state!=0?
   useEffect(() => {
    tl.set(logoNav.current,{opacity:0 , duration:0, ease:"back.out(1.2)"});
    tl.to(logoNav.current,{opacity:1 , duration:1, ease:"back.out(1.2)"});
    tl.from(mainNavRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
   }):

   useEffect(() => {
    tl.from(logoNav.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1});
    tl.from(mainNavRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
   });

   
    return props.state==0?(
        <>
            <a href="#" ref={logoNav}>
                    <LogoLoad className="c-l-logoNav"/>
            </a>

            <ul className='nav justify-content-end c-u-Nav' ref={mainNavRef}>
                 
                <a className="c-u-ToggleMainNav" href="#">
                    <div className="c-u-ToggleNav1"></div>
                    <div className="c-u-ToggleNav2"></div>
                    <div className="c-u-ToggleNav3"></div>
                </a>
              <li className='nav-item'>
                <a className='nav-link active' aria-current="page" href="#">Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Universidad</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Investigacion y Desarrollo</a>
              </li>
            </ul>
        </>
    ):
       <>
            <a href="#" ref={logoNav}>
                    <LogoLoad className="c-l-logoNav"/>
            </a>

            <ul className='nav justify-content-end c-u-Nav' >
                 
                <a className="c-u-ToggleMainNav" href="#">
                    <div className="c-u-ToggleNav1"></div>
                    <div className="c-u-ToggleNav2"></div>
                    <div className="c-u-ToggleNav3"></div>
                </a>
              <li className='nav-item'>
                <a className='nav-link active' aria-current="page" href="#">Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Universidad</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Investigacion y Desarrollo</a>
              </li>
            </ul>
        </>
}
