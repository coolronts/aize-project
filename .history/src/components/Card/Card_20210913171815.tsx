import React from 'react';
import styles from './card.module.css';
import {IItem} from "../../interfaces"

const Card: React.FunctionComponent<IItem> = ({product}) => {  

  return( 
    <section>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.discount}>
            {product.discount} %
          </div>
          <div className={styles.imageContainer}>
            <img src={product.defaultImage} alt="product"/>
          </div>
          <h4 className={styles.name}>{product.name}</h4>
          <h2 className={styles.description}>{product.description}</h2>
          <h3 className={styles.price}>{product.price} <span>NOK</span></h3>
          <div className={styles.buttonContainer}>
            <button type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card;