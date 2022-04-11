
//React an Hot module Loader
import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {hot} from "react-hot-loader";


// Archivos Scss
import "./App.scss";
import "./App2.scss";
import "./Home_Moviles.scss";
import './Home_pantallas medianas.scss';


//Imagenes de la App
import LogoLoad from './LogoLoad.svg';

// Compoenetes de la App
import ErrorBoundary from './ErrorBoundary';
import HomeBanner from "./Components/Home"
import NuestrosProyectos from './Components/NuestrosProyectos.js'
import LoadApp from "./Components/LoadApp";
import Navigation from './Components/Navigation';
import NavSlider from './Components/NavSlider';
import Topics from "./Components/Topics";
import Tools from "./Components/Tools";
import Partners from "./Components/Partners";
import Contact from "./Components/Contact";


//Componente principal, llama a los componentes de las demas paginas y de la actual

function App (){
  
  //Estados de Componentes
  const [state, setstate] = useState(0);

  //Funciones que cambian el estado del componente principal
  function toggleComponentHome(){
    if (state==0) {
      setstate(state)
    } else{
      setstate(1);
    }
  }

  function toggleComponentProyect(){
    if (state==2) {
      setstate(state)
    } else{
      setstate(2);
     
    }
  
    
    
  }


  function toggleComponentTopics(){
    if (state==3) {
      setstate(state)
    } else{
      setstate(3);
     
    }
    
  }

  function toggleComponentTools(){
    if (state==4) {
      setstate(state)
    } else{
      setstate(4);
     
    }
    
    
  }

  function toggleComponentPartners(){
    if (state==5) {
      setstate(state)
    } else{
      setstate(5);
     
    }
    
    
  }

  function toggleComponentContact(){
    if (state==6) {
      setstate(state)
    } else{
      setstate(6);
     
    }
  }
    
  
  

// Funciones que cambian el estado del componente principal
//para decidir que componente mostrar
  function renderComponent(state){
    switch (state ) {
      case 1: return <HomeBanner state={state} />
      case 2: return <NuestrosProyectos state={state}/>
      case 3: return <Topics  state={state}/>
      case 4: return <Tools state={state}/>
      case 5: return <Partners state={state}/>
      case 6:  return <Contact state={state} />        
  
      default:
        break;
    }
  
  }

// metodo de montaje y desmontaje de animaciones GSAP
    useEffect(() => {
      console.log('Estado: ',state);
   
      },[state]);

// Renderizado de la App
    return(
       
        <ErrorBoundary>
              
               <div className="HomeDiv" >
                   
                        <Navigation  state={state}
                          toggleComponentHome={toggleComponentHome}
                          toggleComponentProyect={toggleComponentProyect}
                        />
                    <div id='customNav'>
                        <NavSlider state={state}
                        toggleComponentHome={toggleComponentHome}
                        toggleComponentProyect={toggleComponentProyect}
                        toggleComponentTopics={toggleComponentTopics}
                        toggleComponentTools={toggleComponentTools}
                        toggleComponentPartners={toggleComponentPartners}
                        toggleComponentContact={toggleComponentContact}  />
                    </div>
                    {state==0&&<HomeBanner state={state}/>}
                    {renderComponent(state)}   
                    <LoadApp img={LogoLoad} state={state}/>
               </div>
               
        </ErrorBoundary>   
       
    );

  

}

export default hot (module) (App);
