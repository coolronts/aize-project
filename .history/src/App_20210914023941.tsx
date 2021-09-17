import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import {UserContextProvider} from './context/user'
import {CartContextProvider} from './context/cart'
import {Get} from './api/api'
import { CartType } from './interfaces';

const App: React.FunctionComponent = () => {
  const [id, setId] = useState<number|null>(null)
  const [loading,setLoading] = useState<boolean>(false)
  const addUser = (_id:number) =>{setId(_id)}
  const userContextValues ={id,addUser}
  const [cart, setCart] = useState<
  
  useEffect(()=>{
    if(id != null){
      setLoading(true)
      Get.getUserCart(id)
      .then((response)=>{
        setList(response)
        setLoading(false)
      })
      .catch((error)=>setIsError(true))
    }
    
  },[])

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
