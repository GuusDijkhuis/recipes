import React from 'react';
import axios from 'axios';
import Button from '../../elements/Button';

import classes from './index.module.css';
import '../../../globals.css';

const Card = (props) => {
	return (
		<li className={classes.card}>
			<div className={classes.imageContainer}>
				{
					props.imageUrl ? (
						<img src={props.imageUrl} alt={props.label} />
					) : (
					<div className={classes.noImage}>
						<span>no image</span>
					</div> 
					)
				}
			</div>
			<header>
				<h2>{props.label}</h2>
				<ul className={classes.info}>
					{
						props.tags.length >= 0 ? props.tags.map((tag) => (
							<li>
								<span className={classes.tag}>{tag}</span>
							</li>
						)) : ''
					}
				</ul>
				<p>{props.introduction}</p>
				{
					props.buttonLabel ? (
						<Button
							label={props.buttonLabel}
							type="button"
							classes="secondary"
							eventClick={() => console.log('click')}
						/>
					) : ''
				}
			</header>
		</li>
	);
}

export default Card;
