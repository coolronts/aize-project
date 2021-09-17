import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './logo.module.css';


const Logo: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <AiOutlineShoppingCart className={styles.icon}/>
      </div>
    
      
    </>
  )
}

export default Logo
