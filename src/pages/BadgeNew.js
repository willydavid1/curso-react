import React from 'react'; //importamos react porque esto sera un componente

import './styles/BadgeNew.css'; // importamos los estilos del hero
import header from '../images/badge-header.svg'; //importamos la imagen y hacemos referencia a ella como header | esta es la img del hero
import Navbar from '../components/Navbar'; //importamos el componente navbar - que es una clase
import Badge from '../components/Badge'; //importamos el componente Badge - recibe props
import BadgeForm from '../components/BadgeForm'; //importamos el componente BadgeForm de la carpeta de componentes y hacemos referencia a el con BadgeForm

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

	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								twitter={this.state.form.twitter}
								jobTitle={this.state.form.jobTitle}
								email={this.state.form.email}
								avatarUrl="https://willydavid1.github.io/images/mi-foto-recortada.jpg"
							/>
						</div>

						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew; //exportamos el componente (la clase BadgeNew)
