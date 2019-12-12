import React from 'react'; //importamos react porque esto sera un componente
import { Link } from 'react-router-dom'; //importamos el link

import './styles/Navbar.css'; //importamos los estilos, para este componente Navbar
import logo from '../images/logo.svg'; //importamos el logo y accedemos a el atravez de la palabra logo

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img className="Navbar__brand-logo" src={logo} alt="Logo" />
						<span className="font-weight-light">Platzi</span>
						<span className="font-weight-bold">Conf</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar; //exportamos este componente Navbar
