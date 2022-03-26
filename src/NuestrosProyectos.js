import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import ImagenUniCund from './imagenes/UniversidadCundinamarca.jpg';



export default function NuestrosProyectos(props){

    

    return (
        <div className="Home"  ref={props.banneref}>
            <div className="Content1" >
                <div className="MainTitle">Nuestros Proyectos</div>
                <div className="Content">nuestros proyrctos son fuertemente centrados en la imvestigacion de segurida dinformtatica e infraestructura de redes para la aplicacion correspondiente en proyectos e inovaciones de l amano de sectores empresariales y entidades aliadas</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenUniCund} alt="Images of banner" />
            </div>
        </div>
    );

  }


