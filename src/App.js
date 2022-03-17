import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import "./App2.scss";

class App extends Component {
    render(){
        return(
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>
            <div className="container">
                Usando SASS
            </div>
        </>
        );
    }
}


export default hot (module)(App);


