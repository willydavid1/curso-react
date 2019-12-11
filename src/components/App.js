import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //importamos el BrowserRouter

import Badges from '../pages/Badges'; //importamos el componente de tipo pagina Badges
import BadgeNew from '../pages/BadgeNew'; //importamos el componente BadgeNew

// definimos un componente de otra manera sin usar class sino como funcion, se puede hacer cuando no haya metodos o que no estemos usando estado, el switch toma la direccion que esta en el navegador y se asegura que solamente un Route se renderize la primera que coincida con esa ruta
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/badges" component={Badges} />
				<Route exact path="/badges/new" component={BadgeNew} />
			</Switch>
		</BrowserRouter>
	);
}

export default App; //exportamos el componente
