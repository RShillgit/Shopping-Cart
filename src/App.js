import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Homepage from './components/homepage';
import Shop from './components/shop';
import ItemPage from './components/itemPage';
import Cart from './components/cart';
import { useState } from 'react';

const App = () => {

  const [cartQuant, setCartQuant] = useState(0);
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (item) => {

    // Set new cart quantity
    setCartQuant(cartQuant + item.quantity);

    // Add Cart item to cart items
    setCartItems(cartItems.concat(item))
  }

  return (
    <div className='shoppingApp'>
      <BrowserRouter>

          <NavBar cart={cartQuant}/>

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/shop/:id' element={<ItemPage addToCart={handleAddToCart} />}/>
            <Route path='/cart' element={<Cart cartItems={cartItems}/>} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
