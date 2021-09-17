import React,{useContext, useEffect, useState} from 'react';
import styles from './cart.module.css';
import {AiFillTag} from "react-icons/ai";
import UserContext from '../../context/user'
import CartItem from '../../components/CartItem/CartItem'

const Cart: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const productsList = userContext.Cart.products
  const cart  = userContext.productsInfo
  const [loading, setLoading] = useState(false)

  const findingProductsInfo = () =>{
    setLoading(true)
    productsList.map((product)=>{
      userContext.addProductInfo(product.id,product.quantity)
    })
    setLoading(false)
  }
  useEffect(()=>{
    findingProductsInfo()
  },[userContext.productsInfo])

  return (
    
    <div className={styles.container}>
      { !loading && (
        <>
      <div className={styles.shoppingBag}>
        <h1>Shopping Bag</h1>
        <div className={styles.signInContainer}>
          <p>Have an Account? Sign in and Save time.</p>
          <button>Sign In </button>
        </div>
        {cart.map((item) => {
            <CartItem/>
        })}
      
        <hr/>
      </div>
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.promoCode}>
          <AiFillTag/>
          <h4>Have a Promo Code?</h4>
        </div>
        <div className={styles.price}>
          <h4>Merchandise:</h4>
          <strong>123 NOK</strong>
        </div>
        <div className={styles.price}>
          <h4>Estimated Ship:</h4>
          <strong>Free</strong>
        </div>
        <hr/>
        <div className={styles.price}>
          <h3><strong>Order Total</strong></h3>
          <strong>123 NOK</strong>
        </div>
        <div className={styles.PayButtonContainer}>
          <button>Proceed to Checkout</button>
        </div>
      
      </div></>)}
    </div>
  )
};

export default Cart;
