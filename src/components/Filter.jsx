import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const Filter = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city  '));
	return (
		<div>
			Filter
			<div>
				{/* hame params set karne hain */}
				<input
					type="text"
					placeholder="set search params"
					onChange={(e) =>
						setSearchParams({
							text: e.target.value,
							age: 23,
						})
					}
				/>

				<button
					onClick={() => {
						setSearchParams({ age: 40 });
					}}>
					Set Param
				</button>
			</div>
		</div>
	);
}
