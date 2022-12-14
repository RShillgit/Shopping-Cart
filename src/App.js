import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Homepage from './components/homepage';
import Shop from './components/shop';
import ItemPage from './components/itemPage';
import Cart from './components/cart';
import { useState } from 'react';
import githubMark from './images/githubMark.png';

const App = () => {

  const [cartQuant, setCartQuant] = useState(0);
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (item) => {

    // Set new cart quantity
    setCartQuant(cartQuant + item.quantity);

    // If the item is already in the cart, add the quantity rather than concatenating it
    const itemInCart = cartItems.some(cartItem => cartItem.name === item.name);
    if (itemInCart) {

      for(let i = 0; i< cartItems.length; i++) {
        if(cartItems[i].name === item.name) {
          setCartItems(cItem => 
            cItem.map(obj => {
              if (obj.name === item.name) {
                return {...obj, quantity: (obj.quantity + item.quantity)}
              }
  
              return obj;
          }))
        }
      }
    }
    // Else Concatenate item to cart items
    else {
      setCartItems(cartItems.concat(item))
    }
  }

  const removeCartItem = (obj) => {
   
    // Remove cart item from the cartItems array
    const unfilteredCartItems = [...cartItems];
    const filteredCartItems = unfilteredCartItems.filter((item) => item !== obj);

    setCartItems(filteredCartItems);
    
    // Set the new cart Quantity
    setCartQuant(cartQuant - obj.quantity);

    // Somehow rerender the cart page
    return filteredCartItems;
  }


  return (
    <div className='shoppingApp'>
      <BrowserRouter>

          <NavBar cart={cartQuant}/>

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/shop/:id' element={<ItemPage addToCart={handleAddToCart} />}/>
            <Route path='/cart' element={<Cart removeCartItem={removeCartItem} cartItems={cartItems}/>} />
          </Routes>

          <div className='footer'>
            <a id='github' href='https://github.com/RShillgit/shopping-cart'>
              <img src={githubMark} alt="RShillgit"/>
            </a>
          </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
