import React from 'react';

import '../../../globals.css';
import './index.css'

const Button = (props) => {
	return (
		<button 
			type={props.type ? props.type : 'submit'} 
			className={`${props.classes}`} 
			onClick={props.eventClick ? props.eventClick : ''}
		>
			{props.label}
		</button>
	);
}

export default Button;
