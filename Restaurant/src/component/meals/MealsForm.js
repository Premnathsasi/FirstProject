import React, {useContext} from 'react';
import CartContext from '../../store/CartContext';
import classes from './MealsForm.module.css';

const MealsForm = (props) => {
    const cartCntxt = useContext(CartContext)
    const addItemToCart = (event) => {
            event.preventDefault();
            const quantity = document.getElementById('amount_' + props.id).value
            cartCntxt.addItem({...props.item, quantity:quantity})
    }

    return(
        <form className={classes.form}>
            <label>Amount:</label>
            <input type='number' id={'amount_'+ props.id} min='1' max='10' defaultValue='1' />
            <button onClick={addItemToCart}>+Add</button>
        </form>
            
    )
};

export default MealsForm;