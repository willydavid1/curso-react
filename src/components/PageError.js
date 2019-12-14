import React from 'react';

import './styles/PageError.css'; //importamos los estilos de este componente

// creamos un componente que recibe como props el error y mostramos el mensaje por pantalla
function PageError(props) {
	return <div className="PageError">❌{props.error.message}😱</div>;
}

export default PageError;
