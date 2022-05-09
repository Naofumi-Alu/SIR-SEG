import React,{useEffect,Component} from 'react';
import gsap from 'gsap';
import CiberSecurity from '../imagenes/CiberSecurity.webp';


const partnersRef = React.createRef();
const bannerRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

export default function Partners(props){
    
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
        tl.from(partnersRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
        
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
        tl.from(partnersRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    });
   
    
    return props.state==0?(
    <>   
        <div className="Home" >
            <div className="Content1" ref={partnersRef}>
                <div className="MainTitle">Convenios</div>
                <div className="Content">Elgrupo de investigacion SIR-SEG cuenta con socios universitarios como la Universidad de Cundinamarca, donde se comparte conocimiento, capacitaciones con el fin crecer ingegramente y formar una comunidad de investigacion robusta y liderada para cumplir con los objetivos establecidos</div>
            </div>
            <div className="c-l-Banner"  ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img src={CiberSecurity} className="c-l-Banner--img container-fluid"  alt="Images of banner" />
            </div>
        </div>
         <a style={styleBannerlink} href="#Partners/Content"  onClick={props.onHandleComponentUtility}></a>
    </>
      
    ):
    <>    
        <div className="Home">
            <div className="Content1"  ref={partnersRef}>
                <div className="MainTitle">Convenios </div>
                <div className="Content">Elgrupo de investigacion SIR-SEG cuenta con socios universitarios como la Universidad de Cundinamarca, donde se comparte conocimiento, capacitaciones con el fin crecer ingegramente y formar una comunidad de investigacion robusta y liderada para cumplir con los objetivos establecidos</div>
            </div>
            <div className="c-l-Banner"  ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img src={CiberSecurity} className="c-l-Banner--img container-fluid"  alt="Images of banner" />
            </div>
        </div>
         <a style={styleBannerlink}href="#Partners/Content" onClick={props.onHandleComponentUtility} ></a>
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