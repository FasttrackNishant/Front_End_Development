import React from 'react'
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';


const About = () => {

	const navigate = useNavigate();
	const handleNav = (url) => {
		console.log('called');
		navigate(url);
	};
	return (
		<div>
			About Page is here
			<button className="ml-3" onClick={() => handleNav('/contact')}>
				About Page
			</button>
			<br />
			<button className="ml-3" onClick={() => handleNav('/filter')}>
				Filter Page
			</button>
		</div>
	);
};

export default About;
