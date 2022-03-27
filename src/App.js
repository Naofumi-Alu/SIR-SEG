import React, {Component, useEffect, useState, Suspense,lazy,} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import "./App2.scss";
import ErrorBoundary from './ErrorBoundary';

import './Home_pantallas medianas.scss';
import HomeBanner from "./Components/Home"
import NuestrosProyectos from './Components/NuestrosProyectos.js'
import LoadApp from "./Components/LoadApp";
import Navigation from './Components/Navigation';
import NavSlider from './Components/NavSlider';



//Componente principal, llama a los componentes de las demas paginas y de la actual

function App (){
  const [state, setstate] = useState(0);

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
    setstate(1);
    
    
  }
  function toggleComponentTools(){
    setstate(1);
    
    
  }
  function toggleComponentPartners(){
    setstate(1);
    
    
  }
  function toggleComponentContact(){
    setstate(1);
   
  }

  function renderComponent(state){
    switch (state ) {
      case 1: return <HomeBanner state={state} />
      case 2: return <NuestrosProyectos state={state}/>          
  
      default:
        break;
    }
  
  }
// metodo de montaje y desmontaje de animaciones GSAP
    useEffect(() => {
   
      console.log('Estado: ',state);
   
      });

    return(
       
        <ErrorBoundary>
              
               <div className="HomeDiv" >
                     <div id='customNav'>
                        <Navigation  state={state} />
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
                    <LoadApp state={state}/>
               </div>
               
        </ErrorBoundary>   
       
    );

}



export default hot (module) (App);
