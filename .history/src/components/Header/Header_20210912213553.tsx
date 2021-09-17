import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './header.module.css';


const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>Shopper</h1>
      </div>
      
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
      </ul>
      <AiOutlineShoppingCart className={styles.cartIcon}/>
    </header>
  )
}

export default Header
