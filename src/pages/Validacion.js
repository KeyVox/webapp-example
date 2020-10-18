import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Link, BrowserRouter} from "react-router-dom";

class Validacion extends Component {
    render() {
        return(
            <div>
                <center>
                    <h3>Estamos verificando tu identidad</h3>
                    <img src="https://acegif.com/wp-content/uploads/loading-9.gif" className="cargando"></img>
                    <p>Espera un momento hello</p>   
                </center>
            </div>  
        );
    }
}

export default Validacion;