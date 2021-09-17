import React,{useContext,  useState} from 'react';
import styles from './cart.module.css';
import {AiFillTag} from "react-icons/ai";
import UserContext from '../../context/user'
import CartItem from '../../components/CartItem/CartItem'

const Cart: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const productsList = userContext.Cart.products
  const[total,setTotal]= useState<number>(0)
  const updateTotal = (newPrice:number):void =>{
    setTotal((prevState)=>newPrice+prevState)
  }
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
          {productsList.map((item,index) => {
            return (
              <div key={index}>
                <CartItem id={item.id} qty={item.quantity}  updateTotal={updateTotal}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.promoCode}>
          <AiFillTag/>
          <h4>Have a Promo Code?</h4>
        </div>
        <div className={styles.price}>
          <h4>Merchandise:</h4>
          <strong>{total} NOK</strong>
        </div>
        <div className={styles.price}>
          <h4>Estimated Ship:</h4>
          <strong>Free</strong>
        </div>
        <hr/>
        <div className={styles.price}>
          <h3><strong>Order Total</strong></h3>
          <strong>{total} NOK</strong>
        </div>
        <div className={styles.PayButtonContainer}>
          <button>Proceed to Checkout</button>
        </div>
      
      </div>
    </div>
  )
};

export default Cart;
