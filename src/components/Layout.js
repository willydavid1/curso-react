import React from 'react';

import Navbar from './Navbar'; //importamos el componente Navbar

// creamos el componente plantilla base funcional que recibe por parametro los props los recibimos y los leemos con props.VALOR
function Layout(props) {
	// const children = props.children; //children es todo lo que esta dentro de las etiquetas de este componente en app.js, es el contenido interno y se manda como props para este componente
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;
