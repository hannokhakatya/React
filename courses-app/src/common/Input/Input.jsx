import s from './Input.module.css';
import React from 'react';

function Input(props) {
	return (
		<>
			<label htmlFor={props.inputId}>{props.labelText}</label>
			<input
				type='text'
				onChange={props.onChange}
				id={props.inputId}
				className={s.input}
				placeholder={props.placeholder}
				value={props.value}
			/>
		</>
	);
}

export default Input;
