import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js'; //creamos un nuevo componente llamado App en el index.js y allí dentro vamos a tener BrowserRouter y vamos a añadir mis rutas

import 'bootstrap/dist/css/bootstrap.css'; //importaremos bootstrap, pero hay que instalarlo con  npm install bootstrap y estos estilos los tiene el componente
import './global.css'; //son estilos de css globales que estan en esta misma carpeta src

const container = document.getElementById('app'); // obtenemos el elemento contenedor con id app

// ReactDOM.render(__qué__, __dónde__) lo queremos renderizar
ReactDOM.render(<App />, container); // renderiza este componente App allí dentro vamos a tener BrowserRouter y vamos a añadir mis rutas
