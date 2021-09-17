import React, {useContext, useState} from 'react'
import styles from './logo.module.css'
import {Link} from "react-router-dom"

//icons
import {MdCancel} from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

//interface
import {IProduct} from '../../interfaces'

//context
import UserContext from '../../context/user'

//api
import {Get} from "../../api/api"

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const userContext = useContext(UserContext)

  const [searchItems, setSearchItems] = useState<IProduct[]>([])
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const search = (keyword:any) =>{
    if(keyword.length===0){
      setIsSearch(false)
    }
    else{
      setIsSearch(true)
      Get.searchProduct(keyword)
      .then(result => {setSearchItems(()=>result.slice(0,5))})
    }
  }
  return (
    <>
      {logo==="cart" && (
        <Link to="/cart">
          <div className={styles.logoContainer}>
            <AiOutlineShoppingCart className={styles.icon}/>       
            {userContext.Cart.products != null && (<p className={styles.badge}>{userContext.cartQty}</p>)}
          </div>
        </Link>
      )}

      {logo==="user" && (
        <div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
        </div>
      )}

      {logo==="search" && (
        <>
          { isSearch && <div className={styles.searchContainer}>
            <input type="text" onChange={(e)=>search(e.target.value)} className={styles.searchBox}/> 
            <MdCancel onClick={()=>setIsSearch(false)}  />
            <>
              {isSearch && 
                <div className={styles.suggestionContainer}>
                  {isSearch && searchItems.map((item,index)=>{
                    return(
                      <div key={index} className={styles.suggestionContainer}>
                        <div className={styles.suggestion}>
                          <img src={item.defaultImage} alt="product"/>
                          <div className={styles.info}>
                            <p className={styles.name}>{item.name}</p>
                            <div className={styles.price}>
                              <p>{item.price} Nok</p>
                              <p>-{item.discount}%</p>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                      </div> 
                     )
                  })}
                </div>
              }
            </> 
          </div>}
          
          <div onClick={()=>{
            setIsSearch(true)
            setSearchItems([])
            }} className={styles.logoContainer}>
            <AiOutlineSearch  className={styles.icon}/>       
          </div>
        </>
      )}
    </>
  )
}

export default Logo
