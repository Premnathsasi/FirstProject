import {useContext} from 'react';
import CartContext from '../../store/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from './HeaderButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    const btnCls = `${classes.button} ${classes.bump}`
  return (
    <button className={btnCls} onClick={props.onClick}>
      <span className={classes.icon}>
      <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;



