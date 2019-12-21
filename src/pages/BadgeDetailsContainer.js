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
		data: undefined,
		modalIsOpen: false
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

	// Cuando ocurra el evento de abrir una ventana en el modal llama a este metodo
	handleOpenModal = (e) => {
		this.setState({ modalIsOpen: true });
	};

	// Cuando ocurra el evento de cerrar la ventana en el Modal, llama a esta función de this.handleCloseModal que cambia el estado y dice que ese atributo es false
	handleCloseModal = (e) => {
		this.setState({ modalIsOpen: false });
	};

	// si da click en el boton de eliminar llama a este metodo
	handleDeleteBadge = async (e) => {
		this.setState({ loading: true, error: null });

		try {
			// eliminamos el id que esta en la URL y lo movemos a otra URL
			await api.badges.remove(this.props.match.params.badgeId);

			this.setState({ loading: false });

			this.props.history.push('/badges');
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

		return (
			<BadgeDetails
				OnCloseModal={this.handleCloseModal}
				OnOpenModal={this.handleOpenModal}
				onDeleteBadge={this.handleDeleteBadge}
				modalIsOpen={this.state.modalIsOpen}
				badge={this.state.data}
			/>
		);
	}
}

export default BadgeDetailsContainer;
