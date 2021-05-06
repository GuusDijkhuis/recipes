import React from 'react';
import { Link } from "react-router-dom";

import '../../../globals.css';
import './index.css'

const Button = (props) => {
	return (
		props.link ? (
			<Link to={props.link}>
				<button 
					type={props.type ? props.type : 'submit'} 
					className={`${props.classes}`} 
					onClick={ props.eventClick ? props.eventClick() :  () => {} }
				>
					{props.label}
				</button>
			</Link>
		) : (
			<button 
				type={props.type ? props.type : 'submit'} 
				className={`${props.classes}`} 
				onClick={props.eventClick ? props.eventClick : () => {}}
			>
				{props.label}
			</button>
		)
	);
}

export default Button;
