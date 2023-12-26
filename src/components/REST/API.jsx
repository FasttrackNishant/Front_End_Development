import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export const API = () => {
  return (
		<div>
			
			<ul>
				<li>
					<Link to="fetch">Fetch</Link>
				</li>
				<li>
					<Link to="post">Post</Link>
				</li>
				<Outlet />
			</ul>
		</div>
  );
}
