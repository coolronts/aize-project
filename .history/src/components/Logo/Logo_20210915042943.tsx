import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Get} from "../../api/api"

import styles from './logo.module.css';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import UserContext from '../../context/user'

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const userContext = useContext(UserContext)

  const search = () =>{

  }
  return (
    <>
      {logo==="cart" && (
        <Link to="/cart">
          <div className={styles.logoContainer}>
            <AiOutlineShoppingCart className={styles.icon}/>       
            {userContext.Cart.products != null && (<p className={styles.badge}>{userContext.cartQty}</p>)}
          </div>
        </Link>
      )}

      {logo==="user" && (
        <div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
        </div>
      )}

      {logo==="search" && (
        <>
          <input type="text" onChange={(e)=>search(e)} className={styles.searchBox}/>
          <div className={styles.logoContainer}>
            <AiOutlineSearch  className={styles.icon}/>       
          </div>
        </>
      )}
    </>
  )
}

export default Logo
