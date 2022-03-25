import React, { useEffect, useState } from 'react';
import './Meals.css';
import MealSelection from '../MealSelection/MealSelection';
import Order from '../Order/Order';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    const handleOrder = meal => {
        const newOrder = [...order, meal];
        setOrder(newOrder);
    }
    return (
        <div className='meals-container'>
            <div className='selected-meal'>
                {
                    meals.map(meal => <MealSelection
                        key={meal.idMeal}
                        meal={meal}
                        handleOrder={handleOrder}
                    ></MealSelection>)
                }
            </div>
            <div className='ordered-meal'>
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default Meals;