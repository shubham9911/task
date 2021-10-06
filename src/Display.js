import React, { useState, useEffect } from 'react';

function Display({ jsonData }) {
	const [data, setData] = useState({});

	useEffect(() => {
		setData(
			JSON.parse(localStorage.getItem('TaskInfo'))
				? JSON.parse(localStorage.getItem('TaskInfo'))
				: {}
		);
	}, [jsonData]);
	// console.log(data);
	return (
		<div className='col-6 mx-auto '>
			{data?.users?.map((item) => (
				<div className='w-100 info-card my-2'>
					<h1 className='text-left'>Name : {item.name}</h1>
					<h2>Hobbies:</h2>
					{item.info.map((item2) => (
						<div className='row'>
							<h3 className='col-4'>{item2.hobby}</h3>
							<img className='col-8 my-2' alt='img' src={item2.imgUrl}/>
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Display;
