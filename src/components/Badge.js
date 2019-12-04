import React from 'react'; //importamos react porque estaremos utilizando jsx

import confLogo from '../images/badge-header.svg'; //importamos la imagen y accedemos a ella como confLogo

//creamos el componente Badge, Los  componentes son clases
class Badge extends React.Component {
	render() {
		// el render define el resultado que vamos a ver en pantalla, cuando hagamos render retornaremos algo
		return (
			<div>
				<div>
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>

				<div>
					<img src="https://es.gravatar.com/avatar?d=identicon" alt="avatar" />

					<h1>
						Willy <br /> Daconceicao
					</h1>
				</div>

				<div>
					<p>Ingeniero frontend</p>
					<p>@willydavidlozada</p>
				</div>

				<div>#platziconf</div>
			</div>
		);
	}
}

export default Badge; //exportamos este componente
