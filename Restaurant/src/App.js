import React, { Fragment,useState } from "react";
import Header from "./component/Header";
import Meals from "./component/meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const showCart= () => {
    setOpenCart(true);
  };

  const hideCart= () => {
    setOpenCart(false);
  };

  return (
    <Fragment>
      {openCart && <Cart onClose={hideCart}/>}
      <Header onOpenCart={showCart}/>
      <Meals/>
    </Fragment>
  );
}

export default App;
