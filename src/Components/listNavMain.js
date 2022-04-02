import React ,{useState,useEffect}from "react";
import gsap from "gsap";

export default function ListNavMain(props){


const navList = React.createRef();


var tl= gsap.timeline({repeatDelay:0});

const style={
    paddingTop: "3%"
}

//Estados de Componente ListNavMain
const [state, setstate] = useState(false);

    useEffect(() => {

     //Estado del Componente padre que muestra o oculta la lista de navegacion
        state==true&&
        tl.to(navList.current,{opacity:0 , duration:0.5,x:100, ease:"back.out(1.2)"});

    //Estado del Componente padre que muestra o oculta la lista de navegacion
        state==false&&
        tl.to(navList.current,{opacity:1 , duration:0.5,x:0, ease:"back.out(1.2)"});
    
       

    }, [state]);

   function hideNavMain(){
    setstate(!state);
   }

    return ( 
    <div id='customNav'>
    <a className="c-u-ToggleMainNav" style={style} href="#" onClick={hideNavMain}>
                <div className="c-u-ToggleNav1"></div>
                <div className="c-u-ToggleNav2"></div>
                <div className="c-u-ToggleNav3"></div>
    </a>
    <ul className='nav justify-content-end c-u-Nav' ref={navList}>
        
            <li className='nav-item'  >
              <a className='nav-link active' aria-current="page" href="#" onClick={props.toggleComponentHomeListNav}>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="../">Universidad</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#" onClick={props.toggleComponentProyectListNav}>Investigacion y Desarrollo</a>
            </li>
    </ul>
  </div>)
  }
 
  