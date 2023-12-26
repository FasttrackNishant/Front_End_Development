import React, { useEffect, useRef } from 'react';

export const PreviousProps = (props) => {
	const lastVal = useRef();
	useEffect(() => {
		lastVal.current = props.count;
		console.log(lastVal.current);
	});

	const prevProp = lastVal.current;
	return (
		<div >
			PreviousProps
			<h2>User Component : {props.count}</h2>
			<h2>Previous val : {prevProp}</h2>
		</div>
	);
};
