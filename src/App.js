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
const mainNavRef = React.createRef();
const logoNav = React.createRef();
const navSliderRef = React.createRef();
const bannerRef = React.createRef();
const proyectRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});


function LoadApp(props){
    
    return (
        <>
        <div className="App">
                <div className="c-container-Logo--Loading"  ref={loadRef}>
                    <LogoLoad className="c-l-logo"/>
                </div>
        </div></>
    );
}

function Navigation(props){

   
    return props.state==0?(
        <>
            <a href="#" ref={props.logoRef}>
                    <LogoLoad className="c-l-logoNav"/>
            </a>

            <ul className='nav justify-content-end c-u-Nav' ref={props.navRef}>
                 
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
            <a href="#" ref={props.logoRef}>
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


function  NavSlider (props){
 
    return props.state==0?(
        <div className="c-u-NavBarSliderMain" ref={props.navSliderRef}>
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

//Componente principal, llama a los componentes de las demas paginas y de la actual

function App (){
  const [state, setstate] = useState(0);

  function toggleComponentHome(){
    if (state==0) {
      setstate(state)
    } else{
      setstate(1);
     
    }
    
  }

  function toggleComponentProyect(){
    if (state==2) {
      setstate(state)
    } else{
      setstate(2);
     
    }
  
    
    
  }


  function toggleComponentTopics(){
    setstate(1);
    
    
  }
  function toggleComponentTools(){
    setstate(1);
    
    
  }
  function toggleComponentPartners(){
    setstate(1);
    
    
  }
  function toggleComponentContact(){
    setstate(1);
   
  }

  function renderComponent(state){
    switch (state ) {
      case 1: return <HomeBanner state={state} banneref={bannerRef}/>
      case 2: return <NuestrosProyectos  banneref={proyectRef}/>          
  
      default:
        break;
    }
  
  }
// metodo de montaje y desmontaje de animaciones GSAP
    useEffect(() => {

        {state==1 && tl.from(bannerRef.current,{opacity:0, duration:0.25,ease:"power4.out"})}
        {state==2 && tl.from(proyectRef.current,{opacity:0, duration:0.25,ease:"power4.out"});}
        {state!=0 && tl.from(logoNav.current, {opacity:0, duration:0.25,ease:"power4.out"});}


        {state==0 && tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1.2});}
        {state==0 && tl.from(logoNav.current, {opacity:0, duration:1,ease:"power4.out"})}

        tl.from(mainNavRef.current,{opacity:0, duration:1,ease:"power4.out"});

        tl.from(navSliderRef.current,{opacity:0, duration:1,ease:"power4.out"});

        {state==0&&tl.from(bannerRef.current,{opacity:0, duration:1,ease:"power4.out"})}

        
        
       

      
      console.log('Estado: ',state);
     

    
     
      });

    return(
       
        <ErrorBoundary>
               <div className="HomeDiv" >
                    {state==0?<div id='customNav'>
                        <Navigation logoRef={logoNav} navRef={mainNavRef} state={state} />
                        <NavSlider  navSliderRef={navSliderRef}  state={state}
                        toggleComponentHome={toggleComponentHome}
                        toggleComponentProyect={toggleComponentProyect}
                        toggleComponentTopics={toggleComponentTopics}
                        toggleComponentTools={toggleComponentTools}
                        toggleComponentPartners={toggleComponentPartners}
                        toggleComponentContact={toggleComponentContact}  />
                    </div>
                    : <div id='customNav'>
                    <Navigation logoRef={logoNav} state={state} />
                    <NavSlider  state={state}
                    toggleComponentHome={toggleComponentHome}
                    toggleComponentProyect={toggleComponentProyect}
                    toggleComponentTopics={toggleComponentTopics}
                    toggleComponentTools={toggleComponentTools}
                    toggleComponentPartners={toggleComponentPartners}
                    toggleComponentContact={toggleComponentContact}  />
                </div>}
                    
                    {state==0?  <HomeBanner state={state} banneref={bannerRef}/>
                    : renderComponent(state)
                    }
                    
                   
                   
               </div>
               <LoadApp />
        </ErrorBoundary>   
       
    );

}



export default hot (module) (App);
