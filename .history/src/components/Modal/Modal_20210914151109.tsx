import React, { useContext, useState , useEffect } from 'react';
import styles from './modal.module.css'
import UserContext from '../../context/user'
import {Get} from '../../api/api'

const Modal: React.FunctionComponent = () => {
  const [loading,setLoading] = useState<boolean>(false)
  const [isError,setIsError] = useState<boolean>(false)
  const [fetchedCartQty, setFetchedCartQty] = useState<number>(0)
  

  const userContext = useContext(UserContext)

  useEffect(()=>{
    if(userContext.Cart.id){
      setLoading(true)
      Get.getUserCart(userContext.Cart.id)
      .then(response =>{
        if(response.products != null){
          let totalQty = 0 
          response.products.map((product):number =>totalQty += product.quantity)
          setFetchedCartQty(totalQty)
        }}
  )}},[userContext.Cart.id])
  
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h4>Please Select your Role</h4>
        <hr/>
        <button onClick={()=>{
          !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2)
        }}>
        User</button>
        <button onClick={()=>{
          !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2 + 1)
        }}>Admin</button>
      </div>
    </div>
  )
}

export default Modal
