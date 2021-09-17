import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from './header.module.css';
import Logo from '../Logo/Logo'
import CommonContext from '../../context/common';

const Header: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const role = commonContext.role

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
      <h3 className={styles.role}>{</h3>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>      
    </header>
  )
}

export default Header
