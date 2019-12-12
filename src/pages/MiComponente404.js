import React from 'react';
import img404 from '../images/img404.webp';
import { Link } from 'react-router-dom';

import './styles/estilosError404.css';

function MiComponente404() {
	return (
		<div className="error container d-flex justify-content-center">
			<div className="row">
				<div className="col-12 col-sm-12">
					<img src={img404} alt="404" className="img" />
				</div>

				<div className="col-12">
					<h1>Hmmm!</h1>
					<p>No encontramos lo que buscabas.</p>

					<div className="d-flex justify-content-center">
						<Link to="/" className="mt-3 mb-3 btn btn-primary ">
							Ir al home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MiComponente404;
