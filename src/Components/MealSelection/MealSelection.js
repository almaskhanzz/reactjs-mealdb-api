import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './MealSelection.css';
const MealSelection = (props) => {
    const { handleOrder, meal } = props;
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
    return (
        <div className='meals-selection'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <h3>{strMeal}</h3>
                <p>ID: {idMeal}</p>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
            </div>
            <button onClick={() => handleOrder(meal)} className='btn-order'>
                <p>Place Order</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default MealSelection;