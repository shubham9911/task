import './App.css';
import Form from './Form';
import Display from './Display';


function App() {
	return (
		<div className='App'>
			<h1 className='my-2 text-center'>Personal Information</h1>
			<Form />
			<Display jsonData={JSON.parse(localStorage.getItem('TaskInfo'))}/>
		</div>
	);
}

export default App;

// make a form where we have name field and a hobbies array
