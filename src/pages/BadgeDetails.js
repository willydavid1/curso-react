import React from 'react';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

import PageLoading from '../components/PageLoading'; // importamos el componente que muestra el loader
import PageError from '../components/PageError'; // importamos el componente que muestra el error
import api from '../api';
import Badge from '../components/Badge';

import { Link } from 'react-router-dom';

class BadgeDetails extends React.Component {
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

		const badge = this.state.data;

		return (
			<React.Fragment>
				<div className="BadgeDetails__hero">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<img src={confLogo} alt="Logo de la conferencia" />
							</div>
							<div className="col-6 BadgeDetails__hero-attendant-name">
								<h1>
									{badge.firstName} {badge.lastName}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName={badge.firstName}
								lastName={badge.lastName}
								email={badge.email}
								twitter={badge.twitter}
								jobTitle={badge.jobTitle}
							/>
						</div>

						<div className="col">
							<h2>Actions</h2>

							<div>
								<div>
									<Link
										className="btn btn-primary mb-4"
										to={`/badges/${badge.id}/edit`}
									>
										Editar
									</Link>
								</div>

								<div>
									<button className="btn btn-danger"> eliminar </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeDetails;
