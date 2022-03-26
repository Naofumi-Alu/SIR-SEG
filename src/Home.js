import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import ImagenCapacitacion from './imagenes/CapacitacionInfraestructuraCisco.jpg';



export default function HomeBanner(props){
    

    
    return (
        
        <div className="Home" ref={props.banneref}>
            <div className="Content1" >
                <div className="MainTitle">Investigacion  desarrollo </div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner">
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid" src={ImagenCapacitacion} alt="Images of banner" />
            </div>
        </div>
      
    );

  }


