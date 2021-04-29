import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../../../actions/recipes'

import Button from '../../elements/Button';

import classes from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

const AddRecipe = () => {
	const dispatch = useDispatch();
	const [recipeData, setRecipeData] = useState({
		title: '',
		introduction: '',
		cookingtime: {
			value: 0,
			unit: ''
		},
		personCount: 0,
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
		const updatedIngredientList = recipeData.ingredients.filter(res => res.id !== id);
		setRecipeData({
			...recipeData,
			ingredients: updatedIngredientList
		})
	}
	const removeTool = (id) => {
		const updatedToolList = recipeData.tools.filter(res => res.id !== id);
		setRecipeData({
			...recipeData,
			tools: updatedToolList
		})
	}

	const removeStep = (id) => {
		const updatedStepList = recipeData.steps.filter(res => res.id !== id);
		setRecipeData({
			...recipeData,
			steps: updatedStepList
		})
	}


	const handleSubmit = (e) => {
		let data = { ...recipeData };
		delete data.currIngredient;
		delete data.currTool;
		delete data.currStep;

		e.preventDefault();
		dispatch(createRecipe(data));

		clear();
	}

	const clear = () => {
		setRecipeData({
			title: '',
			introduction: '',
			cookingtime: {
				value: 0,
				unit: ''
			},
			personCount: 0,
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
			<form className={classes.form} onSubmit={handleSubmit}>
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
								<li className={classes.formFieldListItem}>
									<span>Ingredient</span>
									<span>Quantity</span>
									<span>Unit</span>
								</li>
								{
									recipeData.ingredients.length > 0 ? (
										recipeData.ingredients.map((res) => (
											<li className={classes.formFieldListItem}>
												<span>{res.name}</span>
												<span>{res.quantity}</span>
												<span>{res.unit}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => removeIngredient(res.id)}
												/>
											</li>
										))
									) : (
										<li className={classes.formFieldListItem}>
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
									<option value="tbsp">Tablespoon</option>
									<option value="tsp">Teaspoon</option>
									<option value="grams">Grams</option>
									<option value="liters">Liters</option>
									<option value="ml">Mililiters</option>
								</select>
								<Button 
									label='Add'
									type='button'
									classes='secondary'
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
								<li className={classes.formFieldListItem}>
									<span>Tool</span>
								</li>
								{
									recipeData.tools.length > 0 ? (
										recipeData.tools.map((res) => (
											<li className={classes.formFieldListItem}>
												<span>{res.name}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => removeTool(res.id)}
												/>
											</li>
										)
									)) : (
											<li className={classes.formFieldListItem}>
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
									classes='secondary'
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
								<li className={classes.formFieldListItem}>
									<span>Nr.</span>
									<span>Name</span>
									<span>Expected Time</span>
								</li>
								{
									recipeData.steps.length > 0 ? (
										recipeData.steps.map((res, i) => (
											<li className={classes.formFieldListItem}>
												<span>{i}</span>
												<span>{res.name}</span>
												<span>{res.expectedtime.value} {res.expectedtime.unit}</span>
												<Button 
													label='Remove'
													type='button'
													classes='danger'
													eventClick={(e) => removeStep(res.id)}
												/>
											</li>
										)
									)) : (
											<li className={classes.formFieldListItem}>
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
									classes='secondary'
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

export default AddRecipe;