import React, {Component,Suspense,lazy} from "react";
import Logo from './Logo.svg'
import {hot} from "react-hot-loader";
import "./App.scss";
import "./App2.scss";



class App extends Component {
    render(){
        return(
        <>
            <Suspense>
                <div className="App">
                    <Logo className="c-l-logo"/>  
                </div>
            </Suspense >
        </>
        );
    }
}


export default hot (module)(App);


