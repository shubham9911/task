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
			<div className='form'>
				<input placeholder='name' onChange={(e) => setName(e.target.value)} />
				{hobbies.map((item) => (
					<div key={item.id}>
						<input
							placeholder='Hobby'
							value={item.hobby}
							onChange={(e) => handleHobby(e, item.id)}
						/>

						<input
							placeholder='Image URL'
							value={item.imgUrl}
							onChange={(e) => handleImg(e, item.id)}
						/>
						{hobbies.length > 1 ? (
							<button onClick={() => remHobbies(item.id)}>
								Remove Hobbies
							</button>
						) : (
							''
						)}
					</div>
				))}
				<button onClick={addHobbies}>Add Hobbies</button>

				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
}

export default Form;
