import React from 'react'; //necesitamos importar react porque usaremos componentes

class BadgeForm extends React.Component {
	handleChange = (e) => {
		//obtenemos el evento en este metodo de la clase (manejamos el cambio el evento) y obtenemos el valor de lo que estamos escribiendo y el name del input que causa este evento, y lo guardamos todo en un objeto literal
		console.log({
			name: e.target.name,
			value: e.target.value
		});
	};

	handleClick = (e) => {
		// manejamos el evento click del boton
		console.log('El boton fue presionado');
	};

	handleSubmit = (e) => {
		// manejamos el evento de tipo submit del formulario, para que no se envie el formulario con e.preventDefault(); del evento
		e.preventDefault();
		console.log('Formulario enviado');
	};

	render() {
		return (
			<div>
				<h1>New Attendant</h1>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							onChange={this.handleChange}
							className="form-control"
							type="text"
							name="firstName"
						/>
					</div>

					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
