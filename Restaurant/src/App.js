import React, { Fragment } from "react";
import Header from "./component/Header";
import Meals from "./component/meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <Meals/>
    </Fragment>
  );
}

export default App;
