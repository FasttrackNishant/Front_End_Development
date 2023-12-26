import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export const Nested = () => {
	return (
		<div>
			Nested
			<div>
				<NavLink to="company">Company</NavLink>
				<NavLink to="mnc">Mnc</NavLink>
				<NavLink to="startup">StartUp</NavLink>
				<Outlet />
			</div>
		</div>
	);
};
