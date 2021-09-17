import React, {useContext, useState} from 'react';
import {IProduct} from '../../interfaces'
import {Link} from "react-router-dom";
import {Get} from "../../api/api"

import styles from './logo.module.css';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import UserContext from '../../context/user'

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const userContext = useContext(UserContext)
  const [searchItems, setSearchItems] = useState<IProduct[]|null>(null)
  const search = (keyword:any) =>{
    if(keyword.length===0){setSearchItems(null)}
    else{
      Get.searchProduct(keyword)
      .then(result => {setSearchItems(()=>result.slice(0,5))})
    }
    
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
          <div>
            <input type="text" onChange={(e)=>search(e.target.value)} className={styles.searchBox}/>
          </div>
          
          <div className={styles.logoContainer}>
            <AiOutlineSearch  className={styles.icon}/>       
          </div>
        </>
      )}
    </>
  )
}

export default Logo
