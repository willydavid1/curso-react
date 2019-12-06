import React from 'react'; //importamos react porque esto sera un componente

import './styles/BadgeNew.css'; // importamos los estilos del hero
import header from '../images/badge-header.svg'; //importamos la imagen y hacemos referencia a ella como header | esta es la img del hero
import Navbar from '../components/Navbar'; //importamos el componente navbar - que es una clase
import Badge from '../components/Badge'; //importamos el componente Badge - recibe props

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName="Willy"
								lastName="Daconceicao"
								twitter="WillyDaconceic1"
								jobTitle="Frontend Engineer"
								avatarUrl="https://willydavid1.github.io/images/mi-foto-recortada.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew; //exportamos el componente (la clase BadgeNew)
