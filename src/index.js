// // siempre hemos podido crear elementos con document.createElement("que tipo de elemento queremos crear")
// const element = document.createElement('h1'); //creamos un elemento
// element.innerText = 'Hello, platzi Badges!'; //a ese elemento le damos un texto

// //donde queremos poner ese elemento, en la carpeta publica hay un index.html que hay un unico elemento llamado app
// const container = document.getElementById('app'); //obtenemos el elemento app (es un div) del index.html

// container.appendChild(element); //añadimos al container el elemento | tenemos un elemento h1 - un contenedor - y lo presentamos en pantalla SIN USAR REACT

// HAREMOS LO MISMO USANDO REACT, importamos React del modulo react igual para el reactDOM
import React from 'react'; //React como análogo a createElement
import ReactDOM from 'react-dom'; //ReactDOM a appendChild

const element = <h1>Hola, Platzi badges from react</h1>; //creamos un elemento h1

const container = document.getElementById('app'); // obtenemos el elemento contenedor con id app

//lo que no vamos a hacer igual que arriba es el appendChild(element) añadir al container el elemento
// ReactDOM.render(__qué__, __dónde__) lo queremos renderizar
ReactDOM.render(element, container);
