import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { useState } from 'react';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [courseCreationMode, setCourseCreationMode] = useState(false);
	const [allAuthorsList, setAllAuthorsList] = useState(mockedAuthorsList);

	function toggleMode() {
		setCourseCreationMode(!courseCreationMode);
	}
	return (
		<div className='wrapper'>
			<Header />
			{courseCreationMode ? (
				<CreateCourse
					setCoursesList={setCoursesList}
					allAuthorsList={allAuthorsList}
					setAllAuthorsList={setAllAuthorsList}
					coursesList={coursesList}
					toggleMode={toggleMode}
				/>
			) : (
				<Courses
					coursesList={coursesList}
					toggleMode={toggleMode}
					allAuthorsList={allAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;
