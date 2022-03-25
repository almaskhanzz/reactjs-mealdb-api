import React from 'react';
import './Order.css';
const Order = ({ order }) => {
    //console.log(order);
    let items = '';
    let id = 0;
    let area = '';
    let category = '';
    for (const meal of order) {
        items = meal.strMeal;
        id = meal.idMeal;
        area = meal.strArea;
        category = meal.strCategory;
    }
    return (
        <div className='order'>
            <h2>Order Summary</h2>
            <div className='items'>
                <p>Selected Items: {items}</p>
                <p>Id: {id}</p>
                <p>Category: {category}</p>
                <p>Area: {area}</p>
            </div>
        </div>
    );
};

export default Order;