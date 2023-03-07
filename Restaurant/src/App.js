import {useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from './component/Header/Header'
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
