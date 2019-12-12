import React from 'react'; //importamos react porque esto sera un componente
import { Link } from 'react-router-dom';

import astronauts from '../images/astronauts.svg'; //importamos la imagen astronauts y hacemos referencia a ella con la variable astronauts
import platziconfLogo from '../images/platziconf-logo.svg';

import './styles/estilosHome.css';

class Home extends React.Component {
	render() {
		return (
			<div className="d-flex align-items-center justify-content-center container-fluid home">
				<div className="row">
					<div className="col-12 col-sm-5">
						<img
							className="platziconfLogo-HOME mb-4"
							src={platziconfLogo}
							alt="astronauts"
						/>
						<h1 className="h1-HOME">Imprime tus badges</h1>
						<h6 className="h6-HOME">
							La forma más fácil de administrar su conferencia.
						</h6>

						<div className="d-flex justify-content-center">
							<Link to="/badges" className="mt-3 mb-3 btn btn-primary ">
								Start now
							</Link>
						</div>
					</div>

					<div className="col-12 col-sm-7">
						<img
							className="astronauts-HOME"
							src={astronauts}
							alt="astronauts"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
