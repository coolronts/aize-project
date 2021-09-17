import React from 'react';
import {Link} from "react-router-dom";

import styles from './header.module.css';
import Logo from '../Logo/Logo'

const Header: React.FunctionComponent = () => {
  
  return (
    <header>
      <div className={styles.logoContainer}>
        <Link>Shopper</Link>
      </div>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>
    
      
    </header>
  )
}

export default Header
