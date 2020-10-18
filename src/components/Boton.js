import React from 'react';
import '../css/App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

function Boton(props) {
    return(
        <Link to="../pages/Validacion">
            <button className="boton">Continuar</button>
        </Link>
    )
}

export default Boton;