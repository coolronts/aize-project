import React, { useEffect, useState } from 'react';
import {IProduct} from '../../interfaces'
import styles from './cartItem.module.css';
import {Get} from '../../api/api'

interface IProp{
  id:number,qty:number,total:number
}
const CartItem: React.FunctionComponent<IProp> = ({id,qty,total}) => {
  const [productInfo, setProductInfo] = useState<IProduct|null>(null)

  useEffect(()=>{
    Get.getProduct(id)
    .then(response => {
      setProductInfo(response)
      total = response.price*qty;
    })
  },[id])
  return (
    <>
    {productInfo && (
      <div  className={styles.product}>
        <div className={styles.imageContainer}>
          <img src={productInfo.defaultImage} alt="product"/>
        </div>
        <div className={styles.productInfo}>
          <h4>{productInfo.name}</h4>
          <p>Id: <span>{id}</span></p>
          <p>Qty: <span>{qty}</span></p>
          <p>Item Price: <span>{productInfo.price} Nok</span></p>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.productSummary}>
          <h4>Total:</h4>
          <h4>{productInfo.price*qty} Nok</h4>
        </div>
      </div>
    )}
    </>
  )
};

export default CartItem;
