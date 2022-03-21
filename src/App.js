import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import "./App2.scss";
import {gsap} from "gsap";
import ErrorBoundary from './ErrorBoundary';
import LogoLoad from './LogoLoad.svg';
import './Home_pantallas medianas.scss';
import ImagenCapacitacion from './imagenes/CapacitacionInfraestructuraCisco.jpg';


const Logo = React.lazy(() => import('./Logo.svg'));


function Navigation(){
    
    const homeRef = React.createRef();
    useEffect(() => {
        var tl= gsap.timeline({repeatDelay:1});
        tl.from(homeRef.current,{opacity:0, duration:1,ease:"power4.out"});

      });
   
    return(
        <>
            <ul className='nav justify-content-end c-u-Nav'>
                 <a href="#" ref={homeRef}>
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

  function Banner(){
        return(
            <>
                <div className="Content1">
                    <div className="MainTitle">SIRSEG <br/>Investigacion y Desarrollo</div>
                    <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
                <div className="c-l-Banner">
                    <div className="c-l-Banner--mask"></div>
                    <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner" />
                </div>
            </>
        );
  }

class NavSlider extends React.Component{
   
    constructor(props){
        super(props);
        this.state= {isToggleOn: true};
        this.gsapState= 
        this.onHover = this.onHover.bind(this);

    }
    
   

    onHover() {
    this.setState(prevState => ({
                
    }));
    
    }
     render(){
        return(
            <div className="c-u-NavBarSliderMain" >
                <a id="itemNavSlider" className="c-u-NavBarSlider1" href="#" onClick={this.onHover} ></a>
                <a id="itemNavSlider" className="c-u-NavBarSlider2" href="#" onClick={this.onHover} ></a>
                <a id="itemNavSlider" className="c-u-NavBarSlider3" href="#" onClick={this.onHover} ></a>
                <a id="itemNavSlider" className="c-u-NavBarSlider4" href="#" onClick={this.onHover} ></a>
                <a id="itemNavSlider" className="c-u-NavBarSlider5" href="#" onClick={this.onHover} ></a>
                <a id="itemNavSlider" className="c-u-NavBarSlider6" href="#" onClick={this.onHover} ></a>
        </div>
        );
     }

    

   
}

function App (){
    const loadRef= React.createRef();
    const homeRef = React.createRef();

    useEffect(() => {
        var tl= gsap.timeline({repeatDelay:0});

        tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(2.2)", delay:1.2});

        tl.from(homeRef.current,{opacity:0, duration:1,ease:"power4.out"});
    
      });

    return(
       
        <ErrorBoundary>
           
               <div className="Home" ref={homeRef} >
                    <div id='customNav'>
                        
                        <Navigation/>
                        <NavSlider/>
                        
                    </div>
                    <Banner/>
                    
               </div>
            <div className="App">
                <div className="c-container-Logo--Loading"  ref={loadRef}>
                    <LogoLoad className="c-l-logo"/>
                </div>
            </div>
        </ErrorBoundary>   
       
    );

}


export default hot (module) (App);
