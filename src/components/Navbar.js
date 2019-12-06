import React from 'react'; //importamos react porque esto sera un componente

import './styles/Navbar.css'; //importamos los estilos, para este componente Navbar
import logo from '../images/logo.svg'; //importamos el logo y accedemos a el atravez de la palabra logo

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<a className="Navbar__brand" href="/">
						<img className="Navbar__brand-logo" src={logo} alt="Logo" />
						<span className="font-weight-light">Platzi</span>
						<span className="font-weight-bold">Conf</span>
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar; //exportamos este componente Navbar
