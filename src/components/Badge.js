import React from 'react'; //importamos react porque estaremos utilizando jsx

import './styles/Badge.css'; //No guardamos en variable los estilos sino los importamos directamente y puede ser usado dentro y acceder a cualquier estilo

import confLogo from '../images/badge-header.svg'; //importamos la imagen y accedemos a ella como confLogo

//creamos el componente Badge, Los  componentes son clases
class Badge extends React.Component {
	render() {
		// el render define el resultado que vamos a ver en pantalla, cuando hagamos render retornaremos algo
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>

				<div className="Badge__section-name">
					<img
						className="Badge__avatar"
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
						alt="avatar"
					/>

					<h1>
						Willy <br /> Daconceicao
					</h1>
				</div>

				<div className="Badge__section-info">
					<h3>Ingeniero frontend</h3>
					<div>@willydavidlozada</div>
				</div>

				<div className="Badge__footer">#platziconf</div>
			</div>
		);
	}
}

export default Badge; //exportamos este componente
