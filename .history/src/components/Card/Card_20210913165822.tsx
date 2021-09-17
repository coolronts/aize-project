import React from 'react';
import styles from './card.module.css';
import {IItem} from "../../interfaces"

const Card: React.FunctionComponent<IItem> = ({product}) => {  

  return( 
    <section>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
          
            <img src={product.defaultImage} alt="product"/>
          </div>
          <h1 className={styles.title}>{product.name}</h1>
          <h2 className={styles.details}>{product.description}</h2>
        
        
          <h4 className={styles.price}>{product.price} <span>NOK</span></h4>
          <div className={styles.buttonContainer}>
            <button type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card;