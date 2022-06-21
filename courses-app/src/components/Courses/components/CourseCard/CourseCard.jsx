import s from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import { tranformDuration } from '../../../../helpers/pipeDuration';

function CourseCard(props) {
	return (
		<div className={s.courseCard}>
			<div className={s.courseTitleAndDescription}>
				<h2>{props.title}</h2>
				<div>{props.description}</div>
			</div>
			<div className={s.courseInfo}>
				<p className={s.authors}>
					<b>Authors:</b>
					{props.authors.join(', ')}
				</p>
				<p className={s.duration}>
					<b>Duration:</b>
					{tranformDuration(props.duration)}
				</p>
				<p className={s.created}>
					<b>Created:</b>
					{props.created.split('/').join('.')}
				</p>
				<p className={s.showCourse}>
					<Button buttonText='Show course' />
				</p>
			</div>
		</div>
	);
}

export default CourseCard;
