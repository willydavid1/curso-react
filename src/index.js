// HAREMOS LO MISMO USANDO REACT, importamos React del modulo react igual para el reactDOM | tenemos un elemento h1 - un contenedor - y lo presentamos en pantalla SIN USAR REACT
import React from 'react'; //React como análogo a createElement
import ReactDOM from 'react-dom'; //ReactDOM a appendChild

// const jsx = <h1>Hola, Platzi badges from react</h1>; //creamos un elemento h1
// const element = React.createElement(
// 	'a',
// 	{ href: 'https://platzi.com' },
// 	'Ir a platzi'
// ); //crea ese elemento es lo mismo de arriba

// const name = 'willy david';
// const element = React.createElement('h1', {}, `Hola soy ${name}`); //insertamos una variable

// const sum = () => 3 + 3;

//como hacemos esto con JSX insertar variables en un string o ejecutar expresiones de js se coloca entre llaves {}
// const jsx = <h1>Hola soy, {sum()}</h1>; //si la expresion es false, 0, null, undefined no se mostrara
var id = "hola"
//aqui definimos un div y dentro contenido es la ventaja de jsx comparado con React.createElement
const jsx = (
	<div>
		<h1>Hola, soy Willy</h1>
		<p>Soy ingeniero frontend</p>
	</div>
);
const element = React.createElement( //definimos lo de arribaJSX con React.createElement
	'div',
	{},
	React.createElement('h1', {}, 'Hola, soy Willy'),
	React.createElement('p', {}, 'Soy ingeniero de la web')
);
const container = document.getElementById('app'); // obtenemos el elemento contenedor con id app

//lo que no vamos a hacer igual que arriba es el appendChild(element) añadir al container el elemento
// ReactDOM.render(__qué__, __dónde__) lo queremos renderizar
ReactDOM.render(element, container);


// Aprendimos que es JSX, lo escribimos le anidamos elementos es decir crear un div y dentro un h1 y INSERTAMOS VARIABLES, QUE SON EXPRESIONES DE JS con {expresion} y lo comparamos con React.createElement 
