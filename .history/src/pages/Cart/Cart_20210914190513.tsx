import React,{useContext, useEffect, useState} from 'react';
import styles from './cart.module.css';
import {AiFillTag} from "react-icons/ai";
import UserContext from '../../context/user'
import {IProduct} from '../../interfaces'
import {Get} from '../../api/api'

const Cart: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const cart  = userContext.productsInfo


  return (
    <div className={styles.container}>
      <div className={styles.shoppingBag}>
        <h1>Shopping Bag</h1>
        <div className={styles.signInContainer}>
          <p>Have an Account? Sign in and Save time.</p>
          <button>Sign In </button>
        </div>

        <div className={styles.cart}>
          <h2>{userContext.cartQty}</h2>
          <hr/>
          {cart.map(item =>{
            return(
            <>
            <div className={styles.product}>
            <div className={styles.imageContainer}>
              <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/T1/9088.png" alt="product"/>
            </div>
            <div className={styles.productInfo}>
              <h2>{item.info.name}</h2>
              <h4>Id: <span>{item.info.id}</span></h4>
              <h4>Size: <span>s</span></h4>
              <h4>Color: <span>Black</span></h4>
              <h4>Qty: <span>{item.quantity}</span></h4>
              <h4>Item Price: <span>50 Nok</span></h4>
            </div>
            <hr/>
            <div className={styles.productSummary}>
              <h3>Total Price: <span>122 Nok</span></h3>
              <div className={styles.buttonContainer}>
                <button> Edit</button>
                <button> Delete</button>
              </div>
            </div>
          </div></>)
          })}
          
        </div>
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
      
      </div>
    </div>
  )
};

export default Cart;
