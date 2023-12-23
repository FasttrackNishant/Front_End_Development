import React from 'react'
import { useParams } from 'react-router-dom';
export const User = () => {
	const params = useParams();
	const { name } = params;
	console.log(name);

	return (
		<div>
			This is user page
			<h2>Page name: {name}</h2>
		</div>
	);
};
