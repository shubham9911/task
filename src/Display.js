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
	console.log(data);
	return (
		<div>
			{data?.users?.map((item) => (
				<h1>{item.name}</h1>
			))}
			<h1>sdfhkj</h1>
		</div>
	);
}

export default Display;
