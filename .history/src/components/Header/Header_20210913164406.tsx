import React from 'react';
import styles from './header.module.css';
import Logo from '../Logo/Logo'


const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>Shopper</h1>
      </div>
      <div className={styles.logoContainer}>
        
      <Logo logo={"search"}/>
        <Logo logo={"cart"}/>
        <Logo logo={"user"}/>
      </div>
    
      
    </header>
  )
}

export default Header
