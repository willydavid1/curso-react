import React from 'react';
import './styles/estilosBadgesList.css'; //IMPORTAMOS LOS ESTILOS PARA ESTA LISTA
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar'; //importamos el componente gravatar que muestra la img del gravatar

// creamos este custom hooks que usa el estado y filtra depende lo que escribio el usuario
function useSearchBadges(badges) {
	const [query, setQuery] = React.useState('');

	const [filteredBadges, setfilteredBadges] = React.useState(badges);

	// Para que filtre, del array de badges filtramos usamos .filter() manda a cada objeto del array por parámetro y si incluye lo que esta en el estado retornamos true o sino un false lo descartamos, filter nos retorna un array con todo filtrado y la guardamos en filteredBadges. pasamos todos los nombres de array y los pasamos a minusculas
	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase());
		});

		setfilteredBadges(result);
	}, [badges, query]);

	return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
	const badges = props.badges;

	// aqui usamos del estado el query y setquery que es lo que escribe el usuario en el input y el filteredBadges es lo que filtramos es un array con las palabras que contengan lo que se escribio en el query
	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	// console.log(query);
	// console.log(setQuery);
	console.log(filteredBadges);

	if (filteredBadges.length === 0) {
		// si el array esta vacio es decir no hubo ningun dato en el estado (el estado tenemos un array vacio) mostramos esto
		return (
			<div>
				<div className="form-group">
					<label>Filter Badges</label>
					<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>

				<h3>No encontramos ningun badge</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Crea un nuevo badge
				</Link>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className="form-group">
				<label>Filter Badges</label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>

			<ul className="list-unstyled ul-BadgeList">
				{filteredBadges.map((badge) => {
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

								<Link className="btn btn-primary" to={`/badges/${badge.id}`}>
									Ver este badge (detalles)
								</Link>
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
		</React.Fragment>
	);
}

export default BadgesList;
