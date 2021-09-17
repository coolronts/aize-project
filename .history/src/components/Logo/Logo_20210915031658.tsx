import React, {useContext} from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import styles from './logo.module.css';
import UserContext from '../../context/user'

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const userContext = useContext(UserContext)
  return (
    <>
      {logo==="cart" &&
      (<div className={styles.logoContainer}>
         <AiOutlineShoppingCart className={styles.icon}/>       
         {userContext.Cart.products != null && (<p className={styles.badge}>{userContext.cartQty}</p>)}
      </div>)}

      {logo==="user" &&
      (<div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
      </div>)}

      {logo==="search" && (
        <>
          <input type="text" className={styles.searchBox}/>
          <div className={styles.logoContainer}>
            <AiOutlineSearch  className={styles.icon}/>       
          </div>
        </>
      )}
    </>
  )
}

export default Logo
