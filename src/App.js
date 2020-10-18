import React, {useState} from 'react';
import './css/App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import bbva from './images/bbva.jpg';
import citibanamex from './images/citibanamex.png';
import santander from './images/santander.png';
import Loading from './components/Loading';


// Importar componentes
//import TArea from './components/TArea'

function App() {
  var Nombre;
  var pApellido;
  var sApellido;
  var Ciudad;
  var Costo;
  const [loading, setLoading] = useState(false);
  
  const cambiarEstado=()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 5000);
  }

  if(loading) {
    return (
      <Loading />
    )
  }
  else {
  return (
      <div className="App">
        <h1>Selecciona tu tarjeta</h1>
        <center>
          <button className="tarjeta">
            <img src={bbva}></img>Bancomer
          </button>
          <br></br><br></br>
          <button className="tarjeta">
            <img src={citibanamex}></img>Citibanamex
          </button>
          <br></br><br></br>
          <button className="tarjeta">
            <img src={santander}></img>Santander
          </button>
        </center>
          
        <p>/////////////////////////</p>
        <h1>Cuenta bancaria</h1>
        <p>Ingresa la cuenta donde quieres domiciliar tus pagos:</p>
          <div className="ccuenta">
            <center>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000 - 0000 - 0000 - 0000" className="cuenta2" disabled></input>
            </center>
        </div>
        <hr></hr>
        <p><input type="radio"></input> He leído y acepto la <a href="https://www.bbva.com/es/politica-proteccion-datos-personales/" target='_blank'>Política de Proteccion de Datos Personales</a> BBVA</p>
        <center>
          <button className="boton" onClick={()=>cambiarEstado()}>Continuar</button>
        </center>
        <p>/////////////////////////</p>
        <center>
          <h1>El proceso ha finalizado con éxito</h1>
          <b>Cuota mensual: </b>
          <br></br>
          <input type="text" value={Costo} className="datos" disabled></input>
          <h3>¡Gracias por completar tu solicitud con nosotros!</h3>
        </center>
    </div>
  );
}
}

export default App;