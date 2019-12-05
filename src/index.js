import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'; //importaremos la clase badge de la carpeta componentes
import 'bootstrap/dist/css/bootstrap.css'; //importaremos bootstrap, pero hay que instalarlo con  npm install bootstrap y estos estilos los tiene el componente
import './global.css'; //son estilos de css globales que estan en esta misma carpeta src

const container = document.getElementById('app'); // obtenemos el elemento contenedor con id app

// ReactDOM.render(__qué__, __dónde__) lo queremos renderizar
ReactDOM.render(
	<Badge
		firstName="willy"
		lastName="daconceicao"
		avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
		jobTitle="Frontend Engineer"
		twitter="WillyDaconceic1"
	/>,
	container
); // renderiza este componente con estas propiedades, Y en el componente recibe this.props.firstName y this.props.lastName y lo que pongamos aca lo pone alla
