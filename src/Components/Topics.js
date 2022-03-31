import React,{useEffect,Component} from 'react';
import gsap from 'gsap';
import imageSeg from '../imagenes/SeguridadInformatica.png';


const topicsRef = React.createRef();
const bannerRef = React.createRef();
const prevRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

const styleMargin = {
    marginTop:"5%"
  };

  const image={
    opacity:0.2
}

export default function Topics(props){
    
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
        tl.from(topicsRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
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
        tl.from(topicsRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    });
   
    
    return props.state==0?(
        
        <div className="Home" >
            <div className="Content1" ref={topicsRef} >
                <div className="MainTitle">Seguridad Desarrollo</div>
                <div className="Content" style={styleMargin}>Grupo deinvestigacion consolidado en temas de Seguridad Informatica e Infraestructura de redes, profndizando e inovando en laS TIC para frecer a sus partners un servicio de calidad en procesos efectivos y estudios dentro de los mismos</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask" style={image}></div>
                <img className="c-l-Banner--img container-fluid" src={imageSeg} alt="Images of banner" />
            </div>
        </div>
      
    ):
        
        <div className="Home" >
            <div className="Content1" ref={topicsRef}>
                <div className="MainTitle">Seguridad Desarrollo </div>
                <div className="Content" style={styleMargin}>Grupo deinvestigacion consolidado en temas de Seguridad Informatica e Infraestructura de redes, profndizando e inovando en laS TIC para frecer a sus partners un servicio de calidad en procesos efectivos y estudios dentro de los mismos</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask" style={image}></div>
                <img className="c-l-Banner--img container-fluid"   src={imageSeg} alt="Images of banner" />
            </div>
        </div>
  }