import React,{useEffect, useState} from "react";
import {gsap} from "gsap";
import ImagenCapacitacion from '../imagenes/CapacitacionInfraestructuraCisco.jpg';

//Components

import {CustomContentHome,CustomContentContact,CustomContentPTools,CustomContentPartner,CustomContentProyect,CustomContentTopics} from './customContent';

//styles contentscss
import './content.scss';
const refHomeContent = React.createRef();
var tl=gsap.timeline({defaults:{duration:1}});

const style={
    height:'100vh',
}

const stylePlease={
   position:'absolute',
    top:'80%',
    right:'25%',
    width:'50%',
    display:'flex',
    justifyContent:'center',
}

export default function HomeContent (props){


useEffect(() => {
    props.state>=11 &&
    tl.to(refHomeContent.current, { overflowY: "auto"});

    return () => {
        tl.kill();
    };
}, [props.state]);


    return props.state == 11?(
       <article style={style} ref={refHomeContent}>
           <div style={stylePlease}>
           </div>
           <CustomContentHome toggleComponentProyect={props.toggleComponentProyect}
           toggleComponentTopics={props.toggleComponentTopics}
           toggleComponentPartners={props.toggleComponentPartners} />
       </article >
    ):
    props.state == 12?
    <article style={style} ref={refHomeContent}>
            <div style={stylePlease}>
                <h3>Please, Scroll Down</h3>
           </div>
           <CustomContentProyect />
    </article>
    :
    props.state == 13?
        <article style={style} ref={refHomeContent}>
            <div style={stylePlease}>
                <h3>Please, Scroll Down</h3>
           </div>
           <CustomContentPTools />
        </article>
    :
    props.state == 14?
        <article style={style} ref={refHomeContent}>
            <div style={stylePlease}>
                <h3>Please, Scroll Down</h3>
           </div>
           <CustomContentTopics />
        </article>
    :
    props.state == 15?
        <article style={style} ref={refHomeContent}>
           <div style={stylePlease}>
           </div>
           <CustomContentPartner toggleComponentProyect={props.toggleComponentProyect}
           toggleComponentTopics={props.toggleComponentTopics}
           toggleComponentPartners={props.toggleComponentPartners} />
       </article >
    :
    props.state == 16&&
        <article style={style} ref={refHomeContent}>
            <div style={stylePlease}>
                <h3>Please, Scroll Down</h3>
           </div>
           <CustomContentContact />
        </article>
}

