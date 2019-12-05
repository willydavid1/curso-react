import React from 'react'; //importamos react porque estaremos utilizando jsx

import './styles/Badge.css'; //No guardamos en variable los estilos sino los importamos directamente y puede ser usado dentro y acceder a cualquier estilo

import confLogo from '../images/badge-header.svg'; //importamos la imagen y accedemos a ella como confLogo

//creamos el componente Badge, Los  componentes son clases
class Badge extends React.Component {
	render() {
		// el render define el resultado que vamos a ver en pantalla, cuando hagamos render retornaremos algo
		// PODEMOS DECIR QUE LOS PROPS QUE SE MANDAN DESDE EL ELEMENTO, LOS RECIBE EL COMPONENTE CON this.props.lastName
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>

				<div className="Badge__section-name">
					<img
						className="Badge__avatar"
						src={this.props.avatarUrl}
						alt="avatar"
					/>

					<h1>
						{this.props.firstName} <br /> {this.props.lastName}
					</h1>
				</div>

				<div className="Badge__section-info">
					<h3>{this.props.jobTitle}</h3>
					<div>@{this.props.twitter}</div>
				</div>

				<div className="Badge__footer">#platziconf</div>
			</div>
		);
	}
}

export default Badge; //exportamos este componente
