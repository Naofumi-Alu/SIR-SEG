import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import LogoLoad from '../LogoLoad.svg';
import {gsap} from "gsap";


const loadRef= React.createRef();
var tl= gsap.timeline({repeatDelay:0});



export default function LoadApp(props){
    
    props.state!=0?
    useEffect(() => {
        tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
    }):
    useEffect(() => {
        tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1});
    });

    return (
        <>
        <div className="App">
                <div className="c-container-Logo--Loading"  ref={loadRef}>
                    <LogoLoad className="c-l-logo"/>
                </div>
        </div></>
    );
}
