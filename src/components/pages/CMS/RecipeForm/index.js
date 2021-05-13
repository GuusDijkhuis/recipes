import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createRecipe, updateRecipe } from '../../../../actions/recipes';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../elements/index.js';

import classes from './index.module.css';

const RecipeForm = () => {
	const { currId } = useParams();
	let recipe = useSelector((state) => state.recipes.filter(recipe => recipe._id === currId));

	const dispatch = useDispatch();

	const [recipeData, setRecipeData] = useState({
		title: '',
		picture: '',
		introduction: '',
		cookingtime: {
			value: '0',
			unit: ''
		},
		personCount: '0',
		ingredients: [],
		currIngredient: {
			id: '',
			name: '',
			quantity: '',
			unit: ''
		},
		tools: [],
		currTool: {
			id: '',
			name: ''
		},
		steps: [],
		currStep: {
			id: '',
			name: '',
			description: '',
			expectedtime: {
				value: '',
				unit: ''
			}
		}
	})

	useEffect(() => {
		if(currId) {
			setRecipeData({
				...recipe[0],
				currIngredient: {
					name: '',
					quantity: '',
					unit: ''
				},
				currTool: {
					id: '',
					name: ''
				},
				currStep: {
					id: '',
					name: '',
					description: '',
					expectedtime: {
						value: '',
						unit: ''
					}
				}
			})
		} // eslint-disable-next-line
	}, []) 
	

	const addIngredient = () => {
		setRecipeData({
			...recipeData,
			ingredients: [ ...recipeData.ingredients, { ...recipeData.currIngredient, id: uuidv4() }],
			currIngredient: {
				name: '',
				quantity: '',
				unit: ''
			}
		})
	}
	const addTool = () => {
		setRecipeData({
			...recipeData,
			tools: [ ...recipeData.tools, { ...recipeData.currTool, id: uuidv4() }],
			currTool: {
				id: '',
				name: ''
			}
		})
	}
	const addStep = () => {
		setRecipeData({
			...recipeData,
			steps: [ ...recipeData.steps, { ...recipeData.currStep, id: uuidv4() }],
			currStep: {
				name: '',
				description: '',
				expectedtime: {
					value: '',
					unit: ''
				}
			}
		})
	}

	const removeIngredient = (id) => {
		const updatedIngredientList = recipeData.ingredients.filter(res => res._id !== id);
		setRecipeData({
			...recipeData,
			ingredients: updatedIngredientList
		})
	}
	const removeTool = (id) => {
		const updatedToolList = recipeData.tools.filter(res => res._id !== id);
		setRecipeData({
			...recipeData,
			tools: updatedToolList
		})
	}

	const removeStep = (id) => {
		const updatedStepList = recipeData.steps.filter(res => res._id !== id);
		setRecipeData({
			...recipeData,
			steps: updatedStepList
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', recipeData.title);
		formData.append('picture', recipeData.picture);
		formData.append('introduction', recipeData.introduction);
		formData.append('cookingtime', JSON.stringify({ ...recipeData.cookingtime }));
		formData.append('personCount', recipeData.personCount);
		formData.append('ingredients', JSON.stringify([ ...recipeData.ingredients ]));
		formData.append('tools', JSON.stringify([ ...recipeData.tools ]));
		formData.append('steps', JSON.stringify([ ...recipeData.steps ]));
		if(currId) {
			dispatch(updateRecipe(recipeData._id, formData));
		} else {
			dispatch(createRecipe(formData));
		}
		clear();
	}

	const clear = () => {
		setRecipeData({
			title: '',
			picture: '',
			introduction: '',
			cookingtime: {
				value: '0',
				unit: ''
			},
			personCount: '0',
			ingredients: [],
			currIngredient: {
				id: '',
				name: '',
				quantity: '',
				unit: ''
			},
			tools: [],
			currTool: {
				id: '',
				name: ''
			},
			steps: [],
			currStep: {
				id: '',
				name: '',
				description: '',
				expectedtime: {
					value: '',
					unit: ''
				}
			}
		})
	}
	return (
		<div className={classes.container}>
			<form className={classes.form} onSubmit={handleSubmit} encType="multipart/form-data">
				<h1 className={classes.formTitle}>Recipe Form</h1>
				<fieldset>
					<div className={classes.formField}>
						<label className={classes.formFieldLabel}>Title</label>
						<input 
							className={classes.formFieldInput}
							type="text" 
							name="title" 
							value={recipeData.title} 
							onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}
						/>
					</div>
					<div className={classes.formField}>
						<label className={classes.formFieldLabel}>Picture</label>
						<input 
							className={classes.formFieldInput}
							type="file" 
							accept=".png, .jpg, .jpeg"
							name="picture"
							onChange={(e) => setRecipeData({...recipeData, picture: e.target.files[0]})}
						/>
					</div>
					<div className={classes.formField}>
						<label className={classes.formFieldLabel}>Introduction</label>
						<textarea 
							className={classes.formFieldInput}
							name="introduction" 
							value={recipeData.introduction} 
							onChange={(e) => setRecipeData({ ...recipeData, introduction: e.target.value })}
						/>
					</div>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Cooking Time</label>
						<div className={classes.formFieldContent}>
							<div className={classes.formDropDown}>
								<input 
									className={classes.formDropDownInput}
									type="number" 
									name="cookingtime" 
									value={recipeData.cookingtime.value} 
									onChange={(e) => setRecipeData({ ...recipeData, cookingtime: { ...recipeData.cookingtime, value: e.target.value }})}
								/>
								<select 
									className={classes.formDropDownSelect}
									name="timeUnit"
									value={recipeData.cookingtime.unit} 
									onChange={(e) => setRecipeData({ ...recipeData, cookingtime: { ...recipeData.cookingtime, unit: e.target.value }})}
								>
									<option value="hour">hour</option>
									<option value="minutes">minutes</option>
								</select>
							</div>
						</div>
					</div>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Persons</label>
						<input 
							className={classes.formFieldInput}
							type="text" 
							name="personCount" 
							value={recipeData.personCount} 
							onChange={(e) => setRecipeData({ ...recipeData, personCount: e.target.value })}
						/>
					</div>
				</fieldset>
				<fieldset>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Ingredients</label>
						<div className={classes.formFieldContent}>
							<ul className={classes.formFieldList}>
								<li key={uuidv4()} className={classes.formFieldListItem}>
									<span>Ingredient</span>
									<span>Quantity</span>
									<span>Unit</span>
								</li>
								{
									recipeData.ingredients.length > 0 ? (
										recipeData.ingredients.map((res) => (
											<li key={uuidv4()} className={classes.formFieldListItem}>
												<span>{res.name}</span>
												<span>{res.quantity}</span>
												<span>{res.unit}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => { removeIngredient(res._id) }}
												/>
											</li>
										))
									) : (
										<li key={uuidv4()} className={classes.formFieldListItem}>
											<span>-</span>
											<span>-</span>
											<span>-</span>
											<span>-</span>
										</li>
									)
								}
							</ul>
							<div className={classes.formDropDown}>
								<input 
									className={classes.formDropDownInput}
									type="text" 
									name="ingredientName"
									onChange={(e) => setRecipeData({ ...recipeData, currIngredient: { ...recipeData.currIngredient, name: e.target.value }})}
									value={recipeData.currIngredient.name}
									placeholder="ingredient"
								/>
								<input 
									className={classes.formDropDownInput}
									type="text" 
									name="ingredientQuantity"
									onChange={(e) => setRecipeData({ ...recipeData, currIngredient: { ...recipeData.currIngredient, quantity: e.target.value }})}
									value={recipeData.currIngredient.quantity}
									placeholder="quantity"
								/>
								<select 
									className={classes.formDropDownSelect} 
									name="ingredientUnit"
									onChange={(e) => setRecipeData({ ...recipeData, currIngredient: { ...recipeData.currIngredient, unit: e.target.value }})}
									placeholder="tablespoon"
								>
									<option default value="pieces">Piece(s)</option>
									<option value="tablespoon">Tbsp</option>
									<option value="teaspoon">Tsp</option>
									<option value="gram">Grams</option>
									<option value="pound">Pounds</option>
									<option value="kilo">Kilos</option>
									<option value="liter">L</option>
									<option value="mililiter">Ml</option>
									<option value="cloves">Cloves</option>
									<option value="leaves">Leaves</option>
								</select>
								<Button 
									label='Add'
									type='button'
									classes='secondary secondary-underline'
									eventClick={addIngredient}
								/>
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Tools</label>
						<div className={classes.formFieldContent}>
							<ul className={classes.formFieldList}>
								<li key={uuidv4()} className={classes.formFieldListItem}>
									<span>Tool</span>
								</li>
								{
									recipeData.tools.length > 0 ? (
										recipeData.tools.map((res) => (
											<li key={uuidv4()} className={classes.formFieldListItem}>
												<span>{res.name}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => removeTool(res._id)}
												/>
											</li>
										)
									)) : (
											<li key={uuidv4()} className={classes.formFieldListItem}>
											<span>-</span>
										</li>
									)
								}
							</ul>
							<div className={classes.formField}>
								<input 
									className={`${classes.formFieldInput} ${classes.formFieldInputRow} `}
									type="text" 
									name="toolName"
									onChange={(e) => setRecipeData({ ...recipeData, currTool: { ...recipeData.currTool, name: e.target.value }})}
									value={recipeData.currTool.name}
									placeholder="tool"
								/>
								<Button 
									label='Add'
									type='button'
									classes='secondary secondary-underline'
									eventClick={addTool}
								/>
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Steps</label>
						<div className={classes.formFieldContent}>
							<ul className={classes.formFieldList}>
								<li key={uuidv4()} className={classes.formFieldListItem}>
									<span>Nr.</span>
									<span>Name</span>
									<span>Expected Time</span>
								</li>
								{
									recipeData.steps.length > 0 ? (
										recipeData.steps.map((res, i) => (
											<li key={uuidv4()} className={classes.formFieldListItem}>
												<span>{i+1}</span>
												<span>{res.name}</span>
												<span>{res.expectedtime.value} {res.expectedtime.unit}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => removeStep(res._id)}
												/>
											</li>
										)
									)) : (
										<li key={uuidv4()} className={classes.formFieldListItem}>
											<span>-</span>
											<span>-</span>
											<span>-</span>
										</li>
									)
								}
							</ul>
						</div>
					</div>
					<div className={classes.formField}>
						<label className={classes.formFieldLabel}>Name</label>
						<input 
							className={classes.formFieldInput}
							type="text" 
							value={recipeData.currStep.name} 
							onChange={(e) => setRecipeData({ ...recipeData, currStep: { ...recipeData.currStep, name: e.target.value }})}
						/>
					</div>
					<div className={classes.formField}>
						<label className={classes.formFieldLabel}>Description</label>
						<textarea 
							className={classes.formFieldInput}
							type="text" 
							value={recipeData.currStep.description} 
							onChange={(e) => setRecipeData({ ...recipeData, currStep: { ...recipeData.currStep, description: e.target.value }})}
						/>
					</div>
					<div className={`${classes.formField}`}>
						<label className={classes.formFieldLabel}>Expected Time</label>
						<div className={classes.formFieldContent}>
							<div className={classes.formDropDown}>
								<input 
									className={classes.formDropDownInput}
									type="number" 
									name="expectedStepTimeUnit" 
									value={recipeData.currStep.expectedtime.value} 
									onChange={(e) => setRecipeData({ ...recipeData, currStep: { ...recipeData.currStep, expectedtime: { ...recipeData.currStep.expectedtime,  value: e.target.value }}})}
								/>
								<select 
									className={classes.formDropDownSelect}
									name="expectedStepTimeUnit"
									value={recipeData.currStep.expectedtime.unit} 
									onChange={(e) => setRecipeData({ 
										...recipeData, 
										currStep: { 
											...recipeData.currStep, 
											expectedtime: { 
												...recipeData.currStep.expectedtime,  
												unit: e.target.value 
											}
										}
									})}
								>
									<option value="hour">hour</option>
									<option value="minutes">minutes</option>
								</select>
								<Button 
									label='Add'
									type='button'
									classes='secondary secondary-underline'
									eventClick={addStep}
								/>
							</div>
						</div>
					</div>
				</fieldset>
				<Button 
					label='Submit'
					type='submit'
					classes='submit'
				/>
			</form>
		</div>
	);
}

export default RecipeForm;