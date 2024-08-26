import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory category="mens"/>} />
          <Route path='/womens' element={<ShopCategory category="women"/>} />
          <Route path='/kids' element={<ShopCategory category="kid"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>


        </BrowserRouter>
        
        
        
      </div>
    );
  }
}

export default App;
