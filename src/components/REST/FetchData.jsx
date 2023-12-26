import React, { useEffect, useState } from 'react';

export const FetchData = () => {
	const [data, setData] = useState({ quotes: [] });
	const [MainId, setId] = useState('');
	const [MainTitle, setTitle] = useState('');

	useEffect(() => {
		fetch('https://dummyjson.com/quotes')
			.then((result) => result.json())
			.then((resp) => {
				console.log('print ting data', resp);
				setData(resp);
				setId(resp.quotes[0].id);
				setTitle(resp.quotes[0].author);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	const deleteUser = (id) => {
		console.log('clicked', id);

		fetch(`url/${id}`, {
			method: 'DELETE',
		})
			.then((result) => {
				return result.json();
			})
			.then((resp) => {
				console.log(resp);

				console.log('in id');
			});
	};

	//   ab eise kiya oth refreshkarna pad raha hain toh simple sol hain ki fetch ko functin mein dalo and delte karne ke bad call karo
	// backend pe depend karta hain method kaise use karna hain

	function updateUser(id) {
		setId(data.quotes[id - 1].id);
		setTitle(data.quotes[id - 1].author);
		console.log(MainId, MainTitle);
	}

	return (
		<div>
			Data is here
			<div>
				<table>
					<thead>
						<tr>
							<td>Id</td>
							<td>Author</td>
							<td>Title</td>
							<td>Quote</td>
						</tr>
					</thead>
					<tbody>
						{data.quotes.map((item) => (
							<tr key={item.id} className="text-center">
								<td>{item.id}</td>
								<td>{item.author}</td>
								<td>{item.quote}</td>
								<td>
									<button
										onClick={() => {
											deleteUser(item.id);
										}}>
										Delete
									</button>
								</td>
								<td>
									<button onClick={() => updateUser(item.id)}>
										Update
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div>
				Prefilled Data
				<div>
					<input
						type="text"
						value={MainId}
						onChange={(e) => setId(e.target.value)}
					/>
					<input
						type="text"
						value={MainTitle}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<button onClick={() => updateUser(MainId)}>
						Update Data
					</button>
				</div>
			</div>
		</div>
	);
};
