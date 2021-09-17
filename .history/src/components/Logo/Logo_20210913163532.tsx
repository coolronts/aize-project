import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './logo.module.css';


const Logo: React.FunctionComponent<{logo:string}>= ({children,logo}) => {
  return (
    <>
      <div className={styles.logoContainer}>
       {logo==="cart" &&
        ( <AiOutlineShoppingCart className={styles.icon}/>)
       }
       
      </div>
    </>
  )
}

export default Logo
