import React from 'react';
import md5 from 'md5'; //importamos md5() que retorna un string con el hash

function Gravatar(props) {
	const email = props.email; //recibimos el email que lo vamos a pasar a hash md5
	const hash = md5(email); //retorna un hash y lo guardamos en variable

	return (
		<img
			className={props.className}
			src={`https://gravatar.com/avatar/${hash}`}
			alt={props.alt}
		/>
	);
}

export default Gravatar;
