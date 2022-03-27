import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {gsap} from "gsap";
import ImagenUniCund from '../imagenes/UniversidadCundinamarca.jpg';


const proyectRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

export default function NuestrosProyectos(props){
    props.state!=0&&
    useEffect(() => {
        tl.from(proyectRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)"});
    });
    

    return props.state==0?(
        <div className="Home"  ref={proyectRef}>
            <div className="Content1" >
                <div className="MainTitle">Nuestros Proyectos</div>
                <div className="Content">nuestros proyrctos son fuertemente centrados en la imvestigacion de segurida dinformtatica e infraestructura de redes para la aplicacion correspondiente en proyectos e inovaciones de l amano de sectores empresariales y entidades aliadas</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenUniCund} alt="Images of banner" />
            </div>
        </div>
    ):
        <div className="Home"  ref={proyectRef}>
            <div className="Content1" >
                <div className="MainTitle">Nuestros Proyectos</div>
                <div className="Content">nuestros proyrctos son fuertemente centrados en la imvestigacion de segurida dinformtatica e infraestructura de redes para la aplicacion correspondiente en proyectos e inovaciones de l amano de sectores empresariales y entidades aliadas</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenUniCund} alt="Images of banner" />
            </div>
        </div>

  }


