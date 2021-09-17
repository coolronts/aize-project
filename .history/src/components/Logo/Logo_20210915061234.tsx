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
          <div className={styles.searchContainer}>
            <input type="text" onChange={(e)=>search(e.target.value)} className={styles.searchBox}/>
            <>
            {searchItems==null && searchItems.map((item,index)=>{
              return(<div className={styles.suggestionContainer}>
                <div key={index} className={styles.suggestion}>
                  <img src={item.defaultImage} alt="product"/>
                  <div className={styles.info}>
                    <p>{item.name}</p>
                    <div className={styles.price}>
                      <p>{item.price} Nok</p>
                      <p>-{item.discount}%</p>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>  )
            })}
            </> 
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
