import React, { Fragment } from "react";
import Header from "./component/Header";
import Meals from "./component/meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals/>
    </Fragment>
  );
}

export default App;
