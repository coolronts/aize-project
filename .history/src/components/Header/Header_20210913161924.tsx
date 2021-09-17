import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './header.module.css';
import Logo from '../Logo/Logo'


const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>Shopper</h1>
      </div>
      <div className={styles.logoContainer}>
        <AiOutlineShoppingCart className={styles.cartIcon}/>
      </div>
    
      
    </header>
  )
}

export default Header
