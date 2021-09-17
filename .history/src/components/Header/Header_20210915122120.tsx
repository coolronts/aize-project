import React from 'react';
import {Link} from "react-router-dom";

import styles from './header.module.css';
import Logo from '../Logo/Logo'

const Header: React.FunctionComponent = () => {
  const linkStyle ={
    textDecoration: 'none', 
    color:'black' 
  }
  return (
    <header>
      <div className={styles.logoContainer}>
        <Link to="/" style={linkStyle}>
          <h1>Shopper</h1>
        </Link>
      </div>
      <h3>Admin</h3>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>      
    </header>
  )
}

export default Header
