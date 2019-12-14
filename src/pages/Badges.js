import React from 'react'; //importamos react para hacer componentes
import { Link } from 'react-router-dom'; //importamos el componente link para que no recarge la pagina

import './styles/Badges.css'; //importamos los estilos
import confLogo from '../images/badge-header.svg'; //importamos la imagen y hacemos referencia a ella con confLogo
import BadgesList from '../components/BadgesList'; // importamos el componente Navbar

import PageLoading from '../components/PageLoading'; // importamos el componente PageLoading
import PageError from '../components/PageError'; // importamos el componente PageError

import api from '../api'; //importamos la api que esta corriendo en el puerto 3001 y alli vamos a hacer las llamadas

// Explicacion a ciclo de vida de componentes
// Cuando llamamos a componentDidMount() que inserte en el estado info  ocurre una actualización que Vuelve a llamar a render, porque cambia la información y cambia como se ve nuestro componente JUNTO ESA ACTUALIZACION SE LLAMA A componentDidUpdate() que recibe por parámetro los props y estado que tenia anteriormente y si nos vamos a otra pagina se llama a componentWillUnmount() es el momento preciso antes que se vaya el componente del dom, donde cancelamos peticiones al actualizar el Estado (BADGES.JS - PAGINA)

class Badges extends React.Component {
	//inicializamos el estado con un atributo loading, data y error
	state = {
		loading: true,
		error: null,
		data: undefined
	};

	// EL MEJOR LUGAR PARA TRABAJAR UNA PETICION A UNA API ES EN EL componentDidMount()
	componentDidMount() {
		this.fetchData(); // llamamos al metodo
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null }); //insertamos en el estado estos datos | esto porque si en un futuro volvemos a llamar a fecthdata, esos valores podían estar cambiados

		try {
			const data = await api.badges.list(); // Esa llamada es asíncrona retorna una promesa cuando la resuelva almacena el valor en const data y si sucede un error la manejamos con catch
			this.setState({ loading: false, data: data }); // Si obtenemos los datos lo guardamos en el estado, en el atributo data con la data que nos llega de la api
		} catch (error) {
			this.setState({ loading: false, error: error }); //EN CASO que ocurra error áñadimos al estado el error (el catch recibe el error por parámetro) y pasamos a false el loading
		}
	};

	render() {
		if (this.state.loading === true) {
			//lo primero es manejar el estado donde loading sea cierto dentro del render retornando un mensaje de Loading.. Cuando loading acabe talvez nuestros datos ya estén disponibles
			return <PageLoading />;
		}

		if (this.state.error) {
			// si hay un error en el state manejamos el error, que esta en el estado, llamamos al componente PageError y le mandamos como props el error que esta en el estado
			return <PageError error={this.state.error} />;
		}

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="Conf Logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badge__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
				</div>

				<div className="Badges__list">
					<div className="Badges__container">
						<BadgesList badges={this.state.data} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
