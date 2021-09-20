import React, {useContext} from 'react';
import styles from './header.module.css';
import {Link} from "react-router-dom";
//component
import Logo from '../Logo/Logo'
//context
import UserContext from '../../context/user';
import CommonContext from '../../context/common';

const Header: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)

  const role = userContext.role
  const isSearch = commonContext.isSearch

  return (
    <>
  {!isSearch &&  
    <header>
      <div>
        <Link to="/" className={styles.linkStyle}><h1>Shopper</h1></Link>
      </div>
      <h3 className={styles.role}> <span>you're logged in as </span>{role}</h3>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>      
    </header>
  }</>
  )
}

export default Header
