import React, {useEffect} from "react";
import {gsap} from "gsap";


const loadRef= React.createRef();
var tl= gsap.timeline({repeatDelay:0});



export default  function LoadApp(props) {
    props.state==6?
    useEffect(() => {
        tl.fromTo(loadRef.current,{opacity:1,y:500,rotation:360},{y:-60, rotation:0});
        //tl.fromTo(loadRef.current,{opacity:1,rotation:360},{ rotation:0});
        
    }):
    useEffect(() => {
        tl.to(loadRef.current,{opacity:0 , duration:0.5, ease:"back.out(1.2)", delay:1});
    });

    return (   
    <>
        <div className="c-l-Logo-App">
                <div className="c-container-Logo--Loading"  ref={loadRef}>
                    <props.img ref={loadRef} className="c-l-logo"/>
                </div>
        </div>
    </>
    );
}

   
