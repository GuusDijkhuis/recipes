import React from 'react';
import Button from '../../elements/Button';

import classes from './index.module.css';
import '../../../globals.css';

const Card = (props) => {
	return (
		<li className={classes.card}>
			<section>
				{
					props.image ? (
						<img src={props.image} alt={props.label} />
					) : (
					<div className={classes.noImage}>
						<span>no image</span>
					</div> 
					)
				}
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
							/>
						) : ''
					}
				</header>
			</section>
		</li>
	);
}

export default Card;
