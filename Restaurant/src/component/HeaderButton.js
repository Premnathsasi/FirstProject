import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
        <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>

};

export default HeaderButton;