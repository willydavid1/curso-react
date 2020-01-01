import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; //importamos el BrowserRouter

import Layout from './Layout'; // importamos la plantilla base
import Badges from '../pages/Badges'; //importamos el componente de tipo pagina Badges
import BadgeNew from '../pages/BadgeNew'; //importamos el componente BadgeNew
import Home from '../pages/HomePage'; //importamos la pagina del home que se renderiza cuando haga match con /
import BadgeDetails from '../pages/BadgeDetailsContainer'; //importamos BadgeDetailsContainer, para solo mostrar los datos de un solo badge
import MiComponente404 from '../pages/MiComponente404';

// para practicar con los hooks
import Hooks from './Hooks';

import BadgeEdit from '../pages/BadgeEdit'; //importamos el componente para editar badges

// definimos un componente de otra manera sin usar class sino como funcion, se puede hacer cuando no haya metodos o que no estemos usando estado, el switch toma la direccion que esta en el navegador y se asegura que solamente un Route se renderize la primera que coincida con esa ruta
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId" component={BadgeDetails} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					
					{/* para practicar con los hooks */}
					<Route exact path="/hooks" component={Hooks} />

					<Route path="/404" component={MiComponente404} />
					<Redirect from="*" to="/404" />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

//vamos a renderizar app en el dom, app es un componente que tiene dentro un
// buscador de rutas BrowserRouter y dentro un layout ese layout tiene contenido propio (Navbar) y
// interno que es lo que este entre esas dos etiquetas son children seria el contenido interno
// que se pasa como props al layout y hacemos referencia a el {props.children}
// layout: contenido propio el navbar y interno desplegara depende la ruta que es lo que esta entre las etiquetas del layout

export default App; //exportamos el componente
