import React from 'react'; //importamos react para hacer componentes
import { Link } from 'react-router-dom'; //importamos el componente link para que no recarge la pagina

import './styles/Badges.css'; //importamos los estilos
import confLogo from '../images/badge-header.svg'; //importamos la imagen y hacemos referencia a ella con confLogo
import BadgesList from '../components/BadgesList'; // importamos el componente Navbar

// Explicacion a ciclo de vida de componentes
// Cuando llamamos a componentDidMount() que inserte en el estado info  ocurre una actualización que Vuelve a llamar a render, porque cambia la información y cambia como se ve nuestro componente JUNTO ESA ACTUALIZACION SE LLAMA A componentDidUpdate() que recibe por parámetro los props y estado que tenia anteriormente y si nos vamos a otra pagina se llama a componentWillUnmount() es el momento preciso antes que se vaya el componente del dom, donde cancelamos peticiones al actualizar el Estado (BADGES.JS - PAGINA)

class Badges extends React.Component {
	// El constructor recibe props y esos props los tenemos que utilizar para inicializar la superclase en este caso es component CON super(props) y es aqui donde inicializamos estado
	constructor(props) {
		super(props);
		console.log('1. constructor()');

		//inicializamos el estado con un atributo llamado data que sera un array y ese array tendra objetos dentro pero ahorita esta vacio
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		console.log('3. componentDidMount()');

		//esta funcion va a actualizar el estado en 3s añadimos un array con 3 objetos
		this.timeoutId = setTimeout(() => {
			this.setState({
				data: [
					{
						id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
						firstName: 'Freda',
						lastName: 'Grady',
						email: 'Leann_Berge@gmail.com',
						jobTitle: 'Legacy Brand Director',
						twitter: 'FredaGrady22221-7573',
						avatarUrl:
							'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
					},
					{
						id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
						firstName: 'Major',
						lastName: 'Rodriguez',
						email: 'Ilene66@hotmail.com',
						jobTitle: 'Human Research Architect',
						twitter: 'MajorRodriguez61545',
						avatarUrl:
							'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
					},
					{
						id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
						firstName: 'Daphney',
						lastName: 'Torphy',
						email: 'Ron61@hotmail.com',
						jobTitle: 'National Markets Officer',
						twitter: 'DaphneyTorphy96105',
						avatarUrl:
							'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon'
					}
				]
			});
		}, 3000);
	}

	componentDidUpdate(prevProps, prevState) {
		//recibe los props que teniamos antes y el state que teniamos antes|cuando llamamos a componentDidMount que inserte en el estado info  ocurre una actualizacion que Vuelve a llamar a render, porque cambia la informacion y cambia como se ve nuestro componente JUNTO ESA ACTUALIZACION SE LLAMA A componentDidUpdate()
		console.log('5. componentDidUpdate()');

		//imprimimos los valores que teniamos antes y despues del update | antes en estado un update vacio y despues uno con la actualizacion la info en el state
		console.log({
			prevProps: prevProps,
			prevState: prevState
		});

		// imprimimos los props y estado actual del componente Badges
		console.log({
			props: this.props,
			state: this.state
		});
	}

	componentWillUnmount() {
		// momento preciso antes que se vaya el componente del dom | cuando se desmonta el componente y sale de escena para provocarlo que puede navegar a otra pagina
		console.log('6. componentWillUnmount()');
		clearTimeout(this.timeoutId); //elimina el id si el trabajo esta pendiente lo cancela no ocurre el timeout | si le pasamos y ese timeout ya expiro no pasa nada
	}

	render() {
		console.log('2/4. render()');

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="Conf Logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badge__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
				</div>

				<div className="Badges__list">
					<div className="Badges__container">
						<BadgesList badges={this.state.data} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
