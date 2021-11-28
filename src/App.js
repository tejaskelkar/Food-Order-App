import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const shownCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <Fragment>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>  
  );
}

export default App;
