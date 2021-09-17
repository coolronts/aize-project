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
  const [products, setProducts] = useState<ProductCartType[]>([])
  const [cart, setCart] = useState<ProductCartType[]>([])
  const [role, setRole] = useState<string|null>(null)
  const addUser = (_id:number) =>{setId(_id)}
  const addProduct = (_id:number) =>{
    setProducts(products.concat({id:_id,quantity:1}))
  }
  const addRole = (_role:'ADMIN' | 'CUSTOMER'|null) =>{setRole(_role)}
  const addCart = (_cart:ProductCartType[])=>{
    setCart(cart.concat(_cart))
  }
  const userContextValues ={Cart:{id,products},addUser,addProduct,role, addRole, addCart}
  
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
