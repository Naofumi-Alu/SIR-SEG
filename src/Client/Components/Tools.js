import React,{useEffect,Component} from 'react';
import gsap from 'gsap';
import Capacitacion from '../imagenes/Capacitacion.jpg'



const toolsRef = React.createRef();
const bannerRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

export default function Tools(props){
    props.state!=0?useEffect(() => {
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
        tl.from(toolsRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
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
        tl.from(toolsRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    });
   
    
    
    return props.state==0?(
    <>    
        <div className="Home">
            <div className="Content1" ref={toolsRef}>
                <div className="MainTitle">Herramientas y Gestion</div>
                <div className="Content">Sistema operativo Kali Liux como entorno de pruebas.investigacion de las Tic de acuerdo a ethical Hacking e instrumentos y dispositivos de infraestructura como Routers Swuiches, modems, y hsots</div>
            </div>
            <div className="c-l-Banner"  ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={Capacitacion} alt="Images of banner" />
            </div>
        </div>
        <a style={styleBannerlink} href="#Tools/Content"  onClick={props.onHandleComponentUtility}></a>
    </>
             
      
    ):
    <>    
        <div className="Home">
            <div className="Content1"  ref={toolsRef}>
                <div className="MainTitle">Herramientas y Gestion </div>
                <div className="Content">Sistema operativo Kali Liux como entorno de pruebas.investigacion de las Tic de acuerdo a ethical Hacking e instrumentos y dispositivos de infraestructura como Routers Swuiches, modems, y hsots</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={Capacitacion} alt="Images of banner" />
            </div>
        </div>
        <a style={styleBannerlink} href="#Tools/Content" onClick={props.onHandleComponentUtility} ></a>
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