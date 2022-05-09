
import "../Home_Moviles.scss";
import "../App2.scss";
import "../App.scss";
import React, {useEffect,useState} from "react";
import gsap from "gsap";
import {hot} from "react-hot-loader";

// Compoenetes de la App
import ErrorBoundary from "../ErrorBoundary";
import RobotSvgChat from '../imagenes/RobotSvg.svg';

//gsap
var tl = gsap.timeline({ repeatDelay: 0 });
var tl2 = gsap.timeline({ repeatDelay: 0 });

function NavigationAppComponent (){
    let [state, setstate] = useState(0);
    let [state2, setstate2] = useState(0);

    const refRobot = React.createRef();

    function onFocus(){
        state==0 && state2==0? setstate2(1) && setstate(state)
        :

        state2==1?
        setstate2(2)
        :

        state2==2&&
        setstate2(1);
       
    }
    useEffect(() => {
        state==0&&
        tl.to(refRobot.current, { opacity: 0, duration: 0.5, ease: "back.out(1.2)" });
        tl.fromTo(refRobot.current, { opacity: 0.2, y: 500, rotation: 360,zIndex:3  }, { y: -40, rotation: 0,zIndex:3, duration: 0.5, ease: "back.out(1.2)" });
        
        return () => {
            tl.kill();
        };

    }, [state]);

    useEffect(() => {
 
        state2==1? tl2.to(refRobot.current, { opacity: 0.8, duration: 0.2 })
        :
        state2==2&& tl2.to(refRobot.current, { opacity: 0.2, duration: 0.2 });
      
        
    }, [state2]);

    console.log(state2);
    
    return (
        <ErrorBoundary>
            <div ref={refRobot }className="container" onMouseEnter   ={onFocus} onMouseLeave={onFocus}>
                <div>
                    <RobotSvgChat style={styleChat}/>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default hot (module)(NavigationAppComponent);

const styleChat = {
    height:" 100%",
    width: "100%"    
}
