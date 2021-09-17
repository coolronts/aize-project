import React, {useContext, useEffect} from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import styles from './logo.module.css';
import UserContext from '../../context/user'
import {Get} from '../../api/api'

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const [loading,setLoading] = useState<boolean>(false)
  const userContext = useContext(UserContext)

  useEffect((
    setLoading(true)
    Get.getUserCart()
    .then((response)=>{
      setList(response)
      setLoading(false)
    })
    .catch((error)=>setIsError(true))
  ) => {},[userContext.Cart.id])
  return (
    <>
      {logo==="cart" &&
      (<div className={styles.logoContainer}>
         <AiOutlineShoppingCart className={styles.icon}/>       
         {userContext.Cart.products != null && (<p className={styles.badge}>{userContext.Cart.products.length}</p>)}
      </div>)}

      {logo==="user" &&
      (<div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
      </div>)}

      {logo==="search" &&
      (
       <>
       <input type="text" className={styles.searchBox}/>
       <div className={styles.logoContainer}>
         <AiOutlineSearch  className={styles.icon}/>       
       </div>
      </>)}
    </>
  )
}

export default Logo
