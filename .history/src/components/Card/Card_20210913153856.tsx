import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import {IItem} from "../../interfaces"

const Card: React.FunctionComponent<IItem> = ({product}) => {  

  return( 
    <section>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            {picUrl &&
            <img src={picUrl} alt="product"/>}
          </div>
          <h1 className={styles.title}>{product.title}</h1>
          <h2 className={styles.details}>{product.details}</h2>
          <div className={styles.sizeContainer}>
          <p>Size:</p>
            <ul>
              {product.size.map((size,index)=>(
                 selectedSize === size ?( <li  key={index} className={styles.active} onClick={(event: React.MouseEvent<HTMLElement>) =>handleSize(event)}>{size}</li>):
                ( <li  key={index} onClick={(event: React.MouseEvent<HTMLElement>) =>handleSize(event)}>{size}</li>)
              ))}
            </ul>
          </div>
          <div className={styles.colorContainer}>
          <p>Color:</p>
            <ul>
              {product.colours.map((element,index)=>(
                 selectedColor === element ?( <li  key={index} className={styles.active} onClick={(e) =>handleColor(e)}>{element}</li>):
                (<li  key={index} onClick={(event: React.MouseEvent<HTMLElement>) =>handleColor(event)}>{element}</li>)
              ))}
            </ul>
          </div>
          <h1 className={styles.price}>{product.price} <span>NOK</span></h1>
          <div className={styles.buttonContainer}>
            <button type="button">Buy</button>
            <button type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card;