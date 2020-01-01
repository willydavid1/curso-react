import React, { Component, useState, useEffect } from 'react';

// componente de tipo clase
class SimpleState extends Component {
	state = {
		cuenta: 0
	};

	render() {
		return (
			<div>
				La cuenta es: {this.state.cuenta}
				<button
					onClick={() => this.setState({ cuenta: this.state.cuenta + 1 })}
				>
					Aumentar Cuenta
				</button>
			</div>
		);
	}
}

// componente funcional, DONDE INTRODUCIMOS ESTADO EN UN COMPONENTE FUNCIONAL, USANDO useState()
function SimpleStateFunction() {
	const [cuenta, setCuenta] = useState(1); // Inicializa el valor en cero, useState me retorna un array, ese array lo destructuramos y sacamos el valor y una función para poder actualizar ese valor del estado

	return (
		<div>
			La cuenta es: {cuenta}
			<button onClick={() => setCuenta(cuenta + 1)}>Aumentar Cuenta</button>
		</div>
	);
}



// creamos un custom hook, que utiliza los dos hooks useState y useEffect
function useCoordenadas() {
	// Declaramos un estado con useState() que inicializa un objeto con valores de la latitud y longitud en null
	const [coordenadas, setCoordenadas] = useState({
		latitud: null,
		longitud: null
	});
	let geoId;

	useEffect(() => {
		//Y usamos un useEffect() recibe una función, cuando el componente se monte react llama a esta función que le pasamos a useEffect() modifica el estado con la latitude y longitud 
		geoId = window.navigator.geolocation.watchPosition((position) => {
			setCoordenadas({
				latitud: position.coords.latitude,
				longitud: position.coords.longitude
			});
		});

        //la única diferencia es que retornamos una función y esta función es la que react va a llamar cuando se desmonte el componente.
		return () => {
			navigator.geolocation.clearWatch(geoId);
		};
	});

	//Y por ultimo nuestro custom hook useCoordenadas() retorna las coordenadas que es lo que esta en el estado
	return coordenadas;
}



// usamos el custom hook que creamos arriba
export default function Coordenadas() {
    const coordenadas = useCoordenadas();

    return coordenadas.latitud == null ? (
        <div> Cargando... </div>
    ) : (
        <div>
            <h2>Latitud: {coordenadas.latitud} </h2>
            <h2>Longitud: {coordenadas.longitud} </h2>
        </div>
    )
}
