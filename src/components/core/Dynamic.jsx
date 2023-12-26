import React from 'react'
import { Link, Route, Router } from 'react-router-dom';
import { User } from './User';

export const Dynamic = () => {
	let users = [
		{ id: 1, name: 'anil', email: 'user1@gmail.com' },
		{ id: 2, name: 'john', email: 'user2@gmail.com' },
		{ id: 3, name: 'sara', email: 'user3@gmail.com' },
		{ id: 4, name: 'mike', email: 'user4@gmail.com' },
		{ id: 5, name: 'emma', email: 'user5@gmail.com' },
	];

	return (
		<Router>
			{users.map((item) => (
				<div key={item.id} className="">
					{/* Make sure Link is used outside of Route components */}
					<Link to={'/user/' + item.id}>{item.name}</Link>
				</div>
			))}

			<Route path="/user/:name">
				<User />
			</Route>
		</Router>
	);
};
