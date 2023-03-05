import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "l1",
          name: "Chow Mein",
          description: "Fried noodles consist of chicken.",
          price: 45.7,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>45.7</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
