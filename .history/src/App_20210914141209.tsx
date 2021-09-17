import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import Header from "./components/Header/Header"
import {UserContextProvider} from './context/user'
interface productCart{
  id:number;
  quantity:number
}
const App: React.FunctionComponent = () => {
  const [id, setId] = useState<number|null>(null)
  const [products, setProducts] = useState<{id: number, quantity:number}[]>([])
  const [cart, setCart] = useState<{id: number, quantity:number}[]>([])
  const [role, setRole] = useState<string|null>(null)
  const addUser = (_id:number) =>{setId(_id)}
  const addProduct = (_id:number, _quantity:number) =>{
    setProducts(products.push(id:_id, quantity:_quantity))
  }
  const addRole = (_role:string) =>{setRole(_role)}
  // const addCart = (_cart:[])=>{(_products:{id:number, quantity:number}[])=>{
  //   setCart(products.push(_products))
  // }}
  const userContextValues ={Cart:{id,products},addUser,addProduct,role, addRole}
  
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
