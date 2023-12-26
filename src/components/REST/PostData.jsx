import React, { useState } from 'react';
import { PreviousProps } from './PreviousProps';
import { StatewithObj } from './StatewithObj';

export const PostData = () => {
	const [name, setName] = useState('');
	const [salary, setSalary] = useState('');
	const [age, setAge] = useState('');

	const [count, setCount] = useState(1);

    const saveUser = () => {
						console.log(salary);
                        console.log(age);
						console.log(name);

            let data = { name, salary, age };
            console.log(data)

            fetch('https://dummy.restapiexample.com/api/v1/create', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((result) => {
				console.log(result);
			});
        

    };

	const updateCount = () =>
	{
		let rand = Math.floor(Math.random() * 10);
		setCount((pre) => {
			console.log(pre);
			return rand;
		});
	}


	// react hooks
	const [data, setData] = useState({ name: 'anil', age: 34 });

	return (
		<div className="flex-col h-screen gap-4">
			<h1>Post Data Api</h1>
			<div className="flex-col m-4 p-3 gap-y-3">
				<input
					type="text"
					name="fname"
					placeholder="Enter Name"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					type="text"
					name="salary"
					placeholder="Enter Salary"
					onChange={(e) => {
						setSalary(e.target.value);
					}}
				/>
				<input
					type="text"
					name="age"
					placeholder="Enter age"
					onChange={(e) => {
						setAge(e.target.value);
					}}
				/>
				<button type="button" onClick={saveUser}>
					Save
				</button>
			</div>

			<div className="border-2 mt-4 p-3">
				<div>Previous State</div>
				<div>
					<h1>{count}</h1>
					<button onClick={updateCount}>
						Click me to Update Count
					</button>
				</div>
			</div>

			<div className="text-md border-2 p-3 my-5">
				<div>Previous props with hooks</div>
				<PreviousProps count={count} />
				<button
					onClick={() => {
						setCount(Math.floor(Math.random() * 10));
					}}>
					Prev Counter
				</button>
			</div>

			<div className="text-md border-2 p-3 my-5">
				<StatewithObj />
				<input
					type="text"
					placeholder="name here"
					value={data.name}
					onChange={(e) =>
						setData({ age: data.age, name: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="age here"
					value={data.age}
					onChange={(e) => setData({ ...data, age: e.target.value })}
				/>
				<h2>{data.name}</h2>
				<br />
				<h2>{data.age}</h2>

				{/* yaha pe ho eisa raha hain ki , ek change karne jao toh dusra change ho raha hain */}
			</div>
		</div>
	);
};
