import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home  from './Home'
import Cart from './Cart'
import {CartProvider} from 'react-use-cart';
// import Itemcard from './Itemcard';

function App() {
  return (
    <>
    <CartProvider>
      <Home/>
      <Cart/>
      {/* <Itemcard/>. */}
    </CartProvider>

    </>
      
    
  );
}

export default App;