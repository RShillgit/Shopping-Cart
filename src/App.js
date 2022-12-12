import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Homepage from './components/homepage';
import Shop from './components/shop';
import ItemPage from './components/itemPage';

const App = () => {
  return (
    <div className='shoppingApp'>
      <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/shop/:id' element={<ItemPage />}/>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
