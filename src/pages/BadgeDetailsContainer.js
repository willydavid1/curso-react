import React from 'react';

import PageLoading from '../components/PageLoading'; // importamos el componente que muestra el loader
import PageError from '../components/PageError'; // importamos el componente que muestra el error
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
	//inicializamos el estado del componente con estos valores
	state = {
		loading: true,
		error: null,
		data: undefined
	};

	//cuando se monte el componente, llama al siguiente metodo
	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null }); //cambiamos el estado

		try {
			// Realiza la petición específicamente a la variable id que se pasa por la URL y guardamos lo que nos retorne en variable
			const data = await api.badges.read(this.props.match.params.badgeId);

			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		//si el estado esta loading mostramos el loading y si hay error tambien lo mostramos
		if (this.state.loading === true) {
			return <PageLoading />;
		}

		//si algo en el error
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return <BadgeDetails badge={this.state.data} />;
	}
}

export default BadgeDetailsContainer;
