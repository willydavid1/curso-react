import React from 'react'; //necesitamos importar react porque usaremos componentes

class BadgeForm extends React.Component {
	// state = {};

	// handleChange = (e) => {
	// 	//obtenemos el evento en este metodo de la clase (manejamos el cambio el evento) y obtenemos el valor de lo que estamos escribiendo y el name del input que causa este evento, y lo guardamos todo en un objeto literal
	// 	// console.log({
	// 	// 	name: e.target.name,
	// 	// 	value: e.target.value
	// 	// });

	// 	// guardamos la informacion en el estado y se le pasa un objeto con info a guardar, en este caso guardamos en el estado un objeto con un atributo que guarda lo que escribe el usuario | para leerlo se utiliza this.state.firstName
	// 	this.setState({
	// 		[e.target.name]: e.target.value //cada uno de sus campos esta guardando su info en el estado con atributos diferentes
	// 	});
	// };

	handleClick = (e) => {
		// manejamos el evento click del boton
		console.log('El boton fue presionado');
	};

	// handleSubmit = (e) => {
	// 	// manejamos el evento de tipo submit del formulario, para que no se envie el formulario con e.preventDefault(); del evento
	// 	e.preventDefault();
	// 	console.log('Formulario enviado');
	// 	console.log(this.state); //cuando enviemos el formulario vamos a imprimir todo el estado
	// };

	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="firstName"
							value={this.props.formValues.firstName}
						/>
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>

					<div className="form-group">
						<label>email</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>

					<div className="form-group">
						<label>Job title</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
					</div>

					<div className="form-group">
						<label>Twitter</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>

					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>
					{this.props.error && (
						<p className="text-danger">
							❌{this.props.error.message || this.props.error}⛔
						</p>
					)}
				</form>
			</div>
		);
	}
}

export default BadgeForm;
