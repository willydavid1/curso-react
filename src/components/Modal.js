import React from 'react';
import ReactDOM from 'react-dom'; //porque usaremos un portal para renderizar desde otro nodo

import './styles/Modal.css'; //importamos los estilos del modal

function Modal(props) {
	if (props.isOpen === false) {
		//si esta true lo vemos y si esta en false, no lo vemos retorna null este componente
		return null;
	}

	//recibe que vamos a renderizar y donde
	return ReactDOM.createPortal(
		<div className="Modal">
			<div className="Modal__container">
				<button onClick={props.onClose} className="Modal__close-button">
					X
				</button>

				{props.children}
			</div>
		</div>,
		document.getElementById('modal')
	);
}

export default Modal;
