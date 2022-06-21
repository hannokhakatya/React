import s from './Button.module.css';

function Button(props) {
	return (
		<button className={s.button} onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
}

export default Button;
