import s from './Courses.module.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useState } from 'react';

let searchValue = '';

function Courses(props) {
	let coursesCards = props.coursesList.map((course) => {
		let authorsNames = course.authors.map((authorId) => {
			let authorName;
			props.allAuthorsList.forEach((authorObject) => {
				if (authorObject.id === authorId) {
					authorName = authorObject.name;
				}
			});
			return authorName;
		});
		return (
			<CourseCard
				key={course.id}
				title={course.title}
				description={course.description}
				authors={authorsNames}
				duration={course.duration}
				created={course.creationDate}
			/>
		);
	});

	const [filtredCards, setFiltredCards] = useState(coursesCards);

	function searchFilfer(value) {
		setFiltredCards(
			coursesCards.filter(
				(course) =>
					course.props.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
			)
		);
	}
	let onInputChange = (e) => {
		searchValue = e.target.value;
		if (searchValue === '') {
			setFiltredCards(coursesCards);
		}
	};

	return (
		<main className={s.courses}>
			<div className={s.searchBarAndButton}>
				<SearchBar
					onChange={onInputChange}
					onClick={() => searchFilfer(searchValue)}
				/>
				<Button onClick={props.toggleMode} buttonText='Add new course' />
			</div>
			{searchValue === '' ? coursesCards : filtredCards}
		</main>
	);
}

export default Courses;
