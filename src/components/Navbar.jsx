import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div>
			<ul className="flex gap-x-4">
				<li>
					<Link to="/" className="text-red-200">
						Home
					</Link>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="text-orange-600 ">
						Contact
					</NavLink>
				</li>
				<li>Service</li>

				{/* inline method to handle active links */}
				<li>
					<NavLink
						to="/notfound"
						style={({ isActive }) => {
							return {
								color: isActive ? 'green' : '',
							};
						}}>
						Not Found
					</NavLink>
				</li>
				<li>
					<NavLink to="/nested">Nested</NavLink>
				</li>
			</ul>
		</div>
	);
};
