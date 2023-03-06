import React, {useState } from "react";
import Header from "./component/Header/Header";
import Meals from "./component/meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const showCart= () => {
    setOpenCart(true);
  };

  const hideCart= () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      {openCart && <Cart onClose={hideCart}/>}
      <Header onOpenCart={showCart}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
