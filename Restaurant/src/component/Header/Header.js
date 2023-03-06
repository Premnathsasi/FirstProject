import React from 'react';
import HeaderButton from './HeaderButton';
import mealsImage from './meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meatatarian</h1>
            <HeaderButton onClick={props.onOpenCart} />
        </header>
        <div className={classes['main-image']}>
    <img src={mealsImage} alt='Meals Images' />
        </div>
    </React.Fragment>
};


export default Header;