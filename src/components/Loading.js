import React, {Component} from 'react';

function Loading() {
        return(
            <div>
                <center>
                    <h3>Estamos verificando tu identidad</h3>
                    <img src="https://acegif.com/wp-content/uploads/loading-9.gif" className="cargando"></img>
                    <p>Espera un momento</p>
                </center>
            </div>  
        );
}

export default Loading;