import React, {useContext} from 'react';
import styles from './header.module.css';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo'
import UserContext from '../../context/user';

const Header: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const role = userContext.role

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
      <h3 className={styles.role}> <span>you're logged in as </span>{role}</h3>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>      
    </header>
  )
}

export default Header
