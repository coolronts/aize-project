import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import {UserContextProvider} from './context/user'

const App: React.FunctionComponent = () => {
  const [id, setId] = useState<number|null>(null)
  const [products, setProducts] = useState<[id: number, quantity:number]>([])
  const addUser = (_id:number) =>{setId(_id)}
  const addProduct = (_id:number, _quantity:number) =>{setProducts([_id,_quantity])}
  const userContextValues ={Cart:{id,products},addUser,addProduct}
  
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
