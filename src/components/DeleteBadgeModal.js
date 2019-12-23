import React from 'react';

import Modal from './Modal'; //importaremos el modal para pasarle children a modal

function DeleteBadgeModal(props) {
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<div className="DeleteBadgeModal">
				<h1>Estas seguro?</h1>
				<p>Estas apunto de borrar este badge, con nombre de <strong> {props.badge.firstName} {props.badge.lastName} </strong> </p>

				<div>
					<button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
						Eliminar
					</button>
					<button onClick={props.onClose} className="btn btn-primary">
						Cancelar
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default DeleteBadgeModal;
