import React, { useState,useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import {IProduct} from './interfaces'


const App: React.FunctionComponent = () => {
  const [userId, setUserId] = useState<number>()
  const [toggleModal, setToggleModal] = useState<boolean>(true)
  useEffect(() =>{

  })
  return (
    toggleModal &&(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Shop}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    )
      
  )
};

export default App;
