import React from 'react';
import meal from '../../images/meal.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={meal} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;