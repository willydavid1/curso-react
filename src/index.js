import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'; //importaremos la clase badge de la carpeta componentes
import 'bootstrap/dist/css/bootstrap.css'; //importaremos bootstrap, pero hay que instalarlo con  npm install bootstrap y estos estilos los tiene el componente
import './global.css'; //son estilos de css globales que estan en esta misma carpeta src

const container = document.getElementById('app'); // obtenemos el elemento contenedor con id app

// ReactDOM.render(__qué__, __dónde__) lo queremos renderizar
ReactDOM.render(<Badge />, container); // cuando el "que vamos a renderizar" no tiene el <> es un componente pero a ReactDOM.render() hay que darle un elemento asi <Badge />
