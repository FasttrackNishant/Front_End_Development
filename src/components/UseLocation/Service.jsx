import React from 'react'
import { useLocation } from 'react-router-dom';
export const Service = () => {
	const location = useLocation();
	console.log(location);
	return <div>Service</div>;
}
