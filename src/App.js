import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import "./App2.scss";
import {gsap} from "gsap";
import ErrorBoundary from './ErrorBoundary';
import LogoLoad from './LogoLoad.svg';
import './Home_pantallas medianas.scss';
import HomeBanner from "./Home"
import NuestrosProyectos from './NuestrosProyectos.js'

const loadRef= React.createRef();
const mainRef = React.createRef();
const logoNav = React.createRef();
var tl= gsap.timeline({repeatDelay:0});


function LoadApp(props){
    
    return(
        <>
        <div className="App">
                <div className="c-container-Logo--Loading"  ref={loadRef}>
                    <LogoLoad className="c-l-logo"/>
                </div>
        </div></>
    );
}

function Navigation(props){

   
    return(
        <>
            <ul className='nav justify-content-end c-u-Nav'>
                 <a href="#" ref={props.name}>
                    <LogoLoad className="c-l-logoNav"/>
                </a>
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
    );
}


function  NavSlider (){

 
    return(
        <div className="c-u-NavBarSliderMain" >
            <a id="itemNavSlider" className="c-u-NavBarSlider1" href="./Home"  ></a>
            <a id="itemNavSlider" className="c-u-NavBarSlider2" href="#"  ></a>
            <a id="itemNavSlider" className="c-u-NavBarSlider3" href="#"  ></a>
            <a id="itemNavSlider" className="c-u-NavBarSlider4" href="#"  ></a>
            <a id="itemNavSlider" className="c-u-NavBarSlider5" href="#"  ></a>
            <a id="itemNavSlider" className="c-u-NavBarSlider6" href="#"  ></a>
    </div>
    );

    

   
}

//Componente principal, llama a los componentes de las demas paginas y de la actual

function App (){
    
// metodo de montaje y desmontaje de animaciones GSAP
    useEffect(() => {
        tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(2.2)", delay:1.2});

        tl.from(mainRef.current,{opacity:0, duration:1,ease:"power4.out"});

        tl.from(logoNav.current, {opacity:0, duration:0.25,ease:"power4.out"});
    
      });

    return(
       
        <ErrorBoundary>
           
               <div className="Home" ref={mainRef} >
                    <div id='customNav'>
                        <Navigation name={logoNav}/>
                        <NavSlider/>
                    </div>
                    <HomeBanner/>
                    
               </div>
               <LoadApp/>
        </ErrorBoundary>   
       
    );

}


export default hot (module) (App);
