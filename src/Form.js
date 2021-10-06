import React, { useState } from 'react';

function Form() {
	const [name, setName] = useState('');
	const [hobbies, sethobbies] = useState([
		{
			id: Math.random(),
			hobby: '',
			imgUrl: '',
		},
	]);

	const handleHobby = (e, id) => {
		let newHobbies = [...hobbies];

		newHobbies.forEach((item) => {
			if (item.id === id) {
				item.hobby = e.target.value;
			}
		});

		sethobbies(newHobbies);
	};

	const handleImg = (e, id) => {
		let newHobbies = [...hobbies];

		newHobbies.forEach((item) => {
			if (item.id === id) {
				item.imgUrl = e.target.value;
			}
		});

		sethobbies(newHobbies);
	};

	const addHobbies = () => {
		let newHobbies = [...hobbies, { id: Math.random(), hobby: '' }];

		sethobbies(newHobbies);
	};

	const remHobbies = (id) => {
		let newHobbies = hobbies.filter((item) => item.id !== id);
		sethobbies(newHobbies);
	};

	const handleSubmit = () => {
		let item = JSON.parse(localStorage.getItem('TaskInfo'))
			? JSON.parse(localStorage.getItem('TaskInfo'))
			: {};
		let submit = {
			...item,
			users: item?.users
				? [...item.users, { name: name, info: hobbies }]
				: [{ name: name, info: hobbies }],
		};

		localStorage.setItem('TaskInfo', JSON.stringify(submit));
	};

	return (
		<div>
			<div className='col-6 mx-auto'>
				<input
					className='form-control m-3'
					placeholder='name'
					onChange={(e) => setName(e.target.value)}
				/>
				{hobbies.map((item) => (
					<div className='text-center' key={item.id}>
						<input
							className='form-control m-3'
							placeholder='Hobby'
							value={item.hobby}
							onChange={(e) => handleHobby(e, item.id)}
						/>

						<input
							className='form-control m-3'
							placeholder='Image URL'
							value={item.imgUrl}
							onChange={(e) => handleImg(e, item.id)}
						/>
						{hobbies.length > 1 ? (
							<button
								className='btn btn-danger'
								onClick={() => remHobbies(item.id)}>
								Remove Hobbies
							</button>
						) : (
							''
						)}
					</div>
				))}
				<div className='text-center'>
					<button className='btn btn-success m-3' onClick={addHobbies}>
						Add Hobbies
					</button>

					<button className='btn btn-primary m-3' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
