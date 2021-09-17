import React, { useState } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import {IProduct} from './interfaces'
import {CartContextProvider} from './src/context/cart'

const App: React.FunctionComponent = () => {
  const [products,setProducts] =useState<{[key:string]:IProduct[]}>({})
  const updateCart = (_products:{[key:string]:IProduct[]}) => {setProducts(_products)}

  const cartContextValues = {products,updateCart}
  
  return (
    <CartContextProvider value={cartContextValues}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Shop}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  )
};

export default App;
