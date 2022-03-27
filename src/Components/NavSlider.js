import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {gsap} from "gsap";

const navSliderRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});


export default function  NavSlider (props){
    
    useEffect(() => {
        tl.from(navSliderRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1.8});
    });
    return props.state==0?(
        <div className="c-u-NavBarSliderMain" ref={navSliderRef}>
            <a id="itemNavSlider1" className="c-u-NavBarSlider1" href="#Home"  onClick={props.toggleComponentHome}></a>
            <a id="itemNavSlider2" className="c-u-NavBarSlider2" href="#Proyectos" onClick={props.toggleComponentProyect} ></a>
            <a id="itemNavSlider3" className="c-u-NavBarSlider3" href="#topics"  onClick={props.toggleComponentTopics} ></a>
            <a id="itemNavSlider4" className="c-u-NavBarSlider4" href="#tools"  onClick={props.toggleComponentTools} ></a>
            <a id="itemNavSlider5" className="c-u-NavBarSlider5" href="#Partners"  onClick={props.toggleComponentPartners} ></a>
            <a id="itemNavSlider6" className="c-u-NavBarSlider6" href="#contact"   onClick={props.toggleComponentContact}></a>
    </div>
    ):
    <div className="c-u-NavBarSliderMain" >
    <a id="itemNavSlider1" className="c-u-NavBarSlider1" href="#Home"  onClick={props.toggleComponentHome}></a>
    <a id="itemNavSlider2" className="c-u-NavBarSlider2" href="#Proyectos" onClick={props.toggleComponentProyect} ></a>
    <a id="itemNavSlider3" className="c-u-NavBarSlider3" href="#topics"  onClick={props.toggleComponentTopics} ></a>
    <a id="itemNavSlider4" className="c-u-NavBarSlider4" href="#tools"  onClick={props.toggleComponentTools} ></a>
    <a id="itemNavSlider5" className="c-u-NavBarSlider5" href="#Partners"  onClick={props.toggleComponentPartners} ></a>
    <a id="itemNavSlider6" className="c-u-NavBarSlider6" href="#contact"   onClick={props.toggleComponentContact}></a>
</div>
}


