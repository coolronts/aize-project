import React, { useEffect, useState } from 'react';
import {IProduct} from '../../interfaces'
import styles from './cartItem.module.css';
import {Get} from '../../api/api'


interface IProp{
  id:number,qty:number
}
const CartItem: React.FunctionComponent<IProp> = ({id,qty}) => {
  const [productInfo, setProductInfo] = useState<IProduct>()
  useEffect(()=>{

  })
  return (
        <div className={styles.cart}>
          <h2>23</h2>
          <hr/>
          
            <div>
            <div  className={styles.product}>
            <div className={styles.imageContainer}>
              <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/T1/9088.png" alt="product"/>
            </div>
            <div className={styles.productInfo}>
              <h2>njadsa</h2>
              <h4>Id: <span>{id}</span></h4>
              <h4>Size: <span>s</span></h4>
              <h4>Color: <span>Black</span></h4>
              <h4>Qty: <span>{qty}</span></h4>
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
          </div></div>
        
          
        </div>
  )
};

export default CartItem;
