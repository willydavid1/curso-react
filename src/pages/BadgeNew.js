import React from 'react'; //importamos react porque esto sera un componente

import './styles/BadgeNew.css'; // importamos los estilos del hero
import header from '../images/platziconf-logo.svg'; //importamos la imagen y hacemos referencia a ella como header | esta es la img del hero
import Badge from '../components/Badge'; //importamos el componente Badge - recibe props
import BadgeForm from '../components/BadgeForm'; //importamos el componente BadgeForm de la carpeta de componentes y hacemos referencia a el con BadgeForm

import api from '../api'; //im´portamos la api para una llamada

class BadgeNew extends React.Component {
	state = {
		form: {
			//inicializamos el estado de BadgeNew y le añadimos una propiedad que tiene un objeto inicializando los valores del formulario, para evitar el warning en la consola
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	// handleChange lo tiene ahora este componente y ya no badgeForm y para obtenerlo se le pasa como props al componente|creamos un metodo que recibe el evento y cuando lo reciba va a hacer un setState y que el atributo form tenga el valor del input que acaba de ocurrir
	handleChange = (e) => {
		// const nextForm = this.state.form; //almacemamos en nextForm el objeto form
		// nextForm[e.target.name] = e.target.value; //creamos un valor dentro de ese objeto form

		//sobreescribe el form cuando ocurra un nuevo evento para evitarlo podemos hacer una copia del estado del form o desplegamos los valores que tenga el objeto form y le añadimos uno nuevo
		this.setState({
			form: {
				...this.state.form, //desplegamos el objeto (el estado) y le añadimos uno nuevo atributo o sobreescribimos el que ya estaba guardado
				[e.target.name]: e.target.value //del evento del input tomas el name y le asignas como valor, lo que se escriba en el input
			}
		});
	};

	// Manejamos el evento de tipo submit del formulario del componente de badgeForm en BadgeNew, para que no se envie el formulario con e.preventDefault(); del evento, prevenimos el envio del formulario
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			//hacemos la peticion de tipo post y le pasamos los datos a guardar, la info del estado, (la info del fomulario)
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img
						className="BadgeNew__hero-image img-fluid"
						src={header}
						alt="Logo"
					/>
				</div>

				<div className="container-fluid container-md">
					<div className="row">
						<div className="col-6">
							<Badge
								// si el valor del estado no existe entonces usemos este otro valor que le vamos a dar | usamos el condicional or
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								twitter={this.state.form.twitter || 'twitter'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								email={this.state.form.email || 'EMAIL'}
								avatarUrl="https://willydavid1.github.io/images/mi-foto-recortada.jpg"
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew; //exportamos el componente (la clase BadgeNew)
