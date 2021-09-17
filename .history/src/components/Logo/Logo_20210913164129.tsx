import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import styles from './logo.module.css';


const Logo: React.FunctionComponent<{logo:string}>= ({children,logo}) => {
  return (
    <>
        {logo==="cart" &&
      (<div className={styles.logoContainer}>
         <AiOutlineShoppingCart className={styles.icon}/>       
      </div>)}
    </>
  )
}

export default Logo
