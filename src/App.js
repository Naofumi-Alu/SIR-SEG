import React, {Component, useEffect, Suspense,lazy,} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import "./App2.scss";
import {gsap} from "gsap";
import ErrorBoundary from './ErrorBoundary';
import LogoLoad from './LogoLoad.svg';
import './Home_pantallas medianas.scss';

const Logo = React.lazy(() => import('./Logo.svg'));


function Navigation(){
    
    const NavHome = React.createRef();
    useEffect(() => {
        var tl= gsap.timeline({repeatDelay:1});
        tl.from(NavHome.current,{opacity:0, duration:1,ease:"power4.out"});

      });
   
    return(
            <ul className='nav justify-content-end c-u-Nav'>
                 <div ref={NavHome}>
                    <LogoLoad className="c-l-logoNav"/>
                </div>
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
    );
  }

  function Banner(){
        return(
            <div className="Slide1">
                <div className="c-l-Banner">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="MainTitle"><h6>Semillero Ciberseguridad ECCI</h6></div>
                    <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
            </div>
        );
  }

function App (){
    const myRef= React.createRef();
    const NavHome = React.createRef();

    useEffect(() => {
        var tl= gsap.timeline({repeatDelay:1});

        tl.to(myRef.current,{opacity:0 , duration:2, ease:"back.out(2.2)"});

        tl.from(NavHome.current,{opacity:0, duration:1,ease:"power4.out"});

      

      });

    return(
       
        <ErrorBoundary>
           
               <div className="Home" ref={NavHome} >
                    <div id='customNav'>
                        <Navigation/>
                    </div>
                    <div>
                        <Banner/>
                    </div>
               </div>
            <div className="App">
                <div className="c-container-Logo--Loading"  ref={myRef}>
                    <LogoLoad className="c-l-logo"/>
                </div>
            </div>
        </ErrorBoundary>   
       
    );

}


export default hot (module) (App);
