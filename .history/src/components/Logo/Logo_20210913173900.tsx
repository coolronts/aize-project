import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import styles from './logo.module.css';


const Logo: React.FunctionComponent<{logo:string}>= ({children,logo}) => {
  return (
    <>
      {logo==="cart" &&
      (<div className={styles.logoContainer}>
         <AiOutlineShoppingCart className={styles.icon}/>       
      </div>)}

      {logo==="user" &&
      (<div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
      </div>)}

      {logo==="search" &&
      (
       
       <input type="text" className={styles.searchBox}/>
      <div className={styles.logoContainer}>
        <AiOutlineSearch  className={styles.icon}/>       
      </div>)}
    </>
  )
}

export default Logo
