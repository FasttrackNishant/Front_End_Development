import React from 'react'
import { Navbar } from './Navbar';
import { Link, useLocation } from 'react-router-dom';
 const Home = () => {
	const location = useLocation();
	console.log(location);
		return <div>This is home comp</div>;
 };

export default Home;