import React from 'react';

import './styles/PageLoading.css'; //importamos los estilos
import Loader from './Loader'; //importamos el componente loader que es una animacion

// creamos un componente que no recibe props
function PageLoading() {
	return (
		<div className="PageLoading">
			<Loader />
		</div>
	);
}

export default PageLoading;
