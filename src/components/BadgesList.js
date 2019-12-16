import React from 'react';
import './styles/estilosBadgesList.css'; //IMPORTAMOS LOS ESTILOS PARA ESTA LISTA
import { Link } from 'react-router-dom';

import Gravatar from "./Gravatar" //importamos el componente gravatar que muestra la img del gravatar

class BadgesList extends React.Component {
	render() {
		if (this.props.badges.length === 0) {
			// si el array esta vacio es decir no hubo ningun dato en el estado (el estado tenemos un array vacio) mostramos esto
			return (
				<div>
					<h3>No encontramos ningun badge</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Crea un nuevo badge
					</Link>
				</div>
			);
		}

		return (
			<ul className="list-unstyled ul-BadgeList">
				{this.props.badges.map((badge) => {
					//el estado que lo estamos pasando como props (this.props.badges), vamos a iterar cada uno de sus elementos del objeto es un array el atributo data del estado
					return (
						<li key={badge.id} className="item-list-BadgeList">
							<Gravatar
								className="img-persona"
								email={badge.email}
								alt="imagen de la persona"
							/>

							<div className="container">
								<p className="font-weight-bold">
									{badge.firstName} {badge.lastName}
								</p>

								<p className="p-twitter">
									<i className="icon-twitter logo-twitter"></i> @{badge.twitter}
								</p>

								<p>{badge.jobTitle}</p>
							</div>

							<div className="wave">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
									<path
										fill="#0099ff"
										fillOpacity="1"
										d="M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,224C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
									></path>
								</svg>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;
