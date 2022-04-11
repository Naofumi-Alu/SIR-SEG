import React ,{useState,useEffect}from "react";
import gsap from "gsap";

export default function ListNavMain(props){

//Rcrea referencias para aplicar funcionalidades de interpolacion de manipulacion de Interactividad usando GSAP

const navList = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

//crea estilo del cmponente
const style={
    paddingTop: "3%"
}

//Estados de Componente ListNavMain
const [state, setstate] = useState(true);
 
    useEffect(() => {
     

     //Estado del Componente padre que muestra o oculta la lista de navegacion
        state==true&&
        tl.to(navList.current,{zIndex:-5,opacity:0, duration:0.5,x:100, ease:"back.out(1.2)"});

   
       return () => {
        tl.kill();
       }
    }, [state]);

    useEffect(() => {
       //Estado del Componente padre que muestra o oculta la lista de navegacion
       state==false&&
       tl.to(navList.current,{zIndex:0,opacity:1 , duration:1,x:0, ease:"back.out(1.2)"});

      return () => {
         tl.kill();
      };
    }, [state]);

   function hideNavMain(){
    setstate(!state);
   }

    return state==false?( 
        <div id='customNav'>
        <a className="c-u-ToggleMainNav" style={style} href="#" onClick={hideNavMain}>
                    <div className="c-u-ToggleNav1"></div>
                    <div className="c-u-ToggleNav2"></div>
                    <div className="c-u-ToggleNav3"></div>
        </a>
        <ul className='nav justify-content-end c-u-Nav' ref={navList}>
            
                <li className='nav-item'  >
                  <a className='nav-link active' aria-current="page" href="#Home" onClick={props.toggleComponentHomeListNav}>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="https://www.ecci.edu.co/" >Universidad</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'href="#Proyects" onClick={props.toggleComponentProyectListNav}>Investigacion y Desarrollo</a>
                </li>
        </ul>
      </div>
      ):
      state==true&&
      <div id='customNav'>
        <a className="c-u-ToggleMainNav" style={style} href="#" onClick={hideNavMain}>
                    <div className="c-u-ToggleNav1"></div>
                    <div className="c-u-ToggleNav2"></div>
                    <div className="c-u-ToggleNav3"></div>
        </a>
        <ul  className='nav justify-content-end c-u-Nav' ref={navList} >
                      
                <li className='nav-item'  >
                  <a className='nav-link active' aria-current="page">Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'  >Universidad</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Investigacion y Desarrollo</a>
                </li>
        </ul>
      </div>
     
  }
 
  