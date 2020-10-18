import React from 'react';
import logo from './logo.svg';
import './css/App.css';

// Importar componentes
//import TArea from './components/TArea'

function App() {
  var Nombre;
  var pApellido;
  var sApellido;
  var Ciudad;
  var Costo;
  return (
    <div className="App">
      
        <h1>Cuenta bancaria</h1>
        <p>Ingresa la cuenta donde quieres domiciliar tus pagos:</p>
          <div className="con-cuenta">
            <center>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000" className="cuenta" disabled></input>
            <input type="text" value="0000 - 0000 - 0000 - 0000" className="cuenta2" disabled></input>
            </center>
        </div>
        <hr></hr>
        <center>
          <p><input type="radio"></input>He leído y acepto la <a href="https://www.bbva.com/es/politica-proteccion-datos-personales/" target="_blank">política de protección de datos personales</a> de BBVA</p>
          <input type="button" value="Continuar" className="botones" disabled></input>
        </center>
        <h1>El proceso ha sido finalizado con éxito</h1>
        <p>/////////////////////////</p>
        <h1>Confirmación de datos</h1>
        <center>
          <b>Nombre:</b> <br></br><input type="text" value={Nombre} className="datos" maxlength="15" disabled></input>
          <br></br><br></br>
          <b>Primer apellido: </b><br></br><input type="text" value={pApellido} className="datos" maxlength="15" disabled></input>
          <br></br><br></br>
          <b>Segundo apellido: </b><br></br><input type="text" value={sApellido} className="datos" maxlength="15" disabled></input>
          <br></br><br></br>
          <b>Ciudad:</b> <br></br><input type="text" value={Ciudad} className="datos" maxlength="15" disabled></input>
        </center>
        <p>/////////////////////////</p>
        <h1>El proceso ha finalizado con éxito</h1>
        <center>
          <b>Cuota mensual: </b>
          <br></br>
          <input type="text" value={Costo} className="datos" disabled></input>
          <h3>¡Gracias por completar tu solicitud con nosotros!</h3>
        </center>
    </div>
  );
}

export default App;
