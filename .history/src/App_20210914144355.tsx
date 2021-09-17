import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import Header from "./components/Header/Header"
import {UserContextProvider} from './context/user'
import {ProductCartType} from './interfaces'

const App: React.FunctionComponent = () => {
  const [id, setId] = useState<number|null>(null)
  const [role, setRole]= useState<'ADMIN'|'CUSTOMER'|null>(null)
  const [products, setProducts] = useState<ProductCartType[]>([])
  const [cart, setCart] = useState<ProductCartType[]>([])
  
  const addUser = (_id:number) =>{
    setId(_id);
    (_id%2===0) ? setRole('CUSTOMER') : setRole('ADMIN')
  }
  const addProduct = (_id:number) =>{
    setProducts(products.concat({id:_id,quantity:1}))
  }
  const addCart = (_cart:ProductCartType[])=>{
    setCart(cart.concat(_cart))
  }
  const userContextValues ={Cart:{id,role,products},addUser,addProduct, addCart}
  
  return (
    <UserContextProvider value={userContextValues}>
      {id==null && <Modal/> }
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Shop}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    </UserContextProvider> 
  )
};

export default App;
