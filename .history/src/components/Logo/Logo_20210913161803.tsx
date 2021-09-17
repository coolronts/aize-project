import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './logo.module.css';


const Header: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <AiOutlineShoppingCart className={styles.cartIcon}/>
      </div>
    
      
    </>
  )
}

export default Header
