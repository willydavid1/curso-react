import React from 'react';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

import Badge from '../components/Badge'; //importamos el componente Badge
import DeleteBadgeModal from '../components/DeleteBadgeModal'; //importamos el componente DeleteBadgeModal

import { Link } from 'react-router-dom';

function BadgeDetails(props) {
	const badge = props.badge; //guardamos en badge el objeto que nos llega con la info del badge especifico de su id
	// console.log(badge)

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
								<button onClick={props.OnOpenModal} className="btn btn-danger">
									eliminar
								</button>
								<DeleteBadgeModal
									isOpen={props.modalIsOpen}
									onClose={props.OnCloseModal}
									onDeleteBadge={props.onDeleteBadge}
									badge={badge}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default BadgeDetails;
