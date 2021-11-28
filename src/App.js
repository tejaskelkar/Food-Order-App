import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './contexts/CartProvider';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const shownCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>  
  );
}

export default App;
