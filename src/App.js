import './App.css';
import Form from './Form';
import Display from './Display';
function App() {
	return (
		<div className='App'>
			<Form />
			<Display jsonData={JSON.parse(localStorage.getItem('TaskInfo'))}/>
		</div>
	);
}

export default App;

// make a form where we have name field and a hobbies array
