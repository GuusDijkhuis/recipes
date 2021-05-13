import React from 'react';
import Button from '../../elements/Button/index';

import classes from './index.module.css';
import '../../../globals.css';

const Card = (props) => {
	console.log(props.imageUrl);
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
							link={`/recipes/${props.id}`}
							label={props.buttonLabel}
							type="button"
							classes="secondary"
						/>
					) : ''
				}
			</header>
		</li>
	);
}

export default Card;
