import React,{useContext} from 'react';
import styles from './card.module.css';
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'

//interface
import {IItemProps} from "../../interfaces"

//context
import UserContext from '../../context/user'
import CommonContext from '../../context/common'

const Card: React.FunctionComponent<IItemProps> = ({product}) => {  
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)
  const role = userContext.role
  const selectProduct = commonContext.updateSelectedProduct

  return( 
    <section>
      <div className={styles.container}>
        {role ==='ADMIN'?
          <>
            <div className={styles.discount}>{product.discount} % <FaEdit onClick={()=>{commonContext.updateIsEdit('discount');selectProduct(product)}}/> </div>
            <div className={styles.imageContainer}><FaEdit onClick={()=>{commonContext.updateIsEdit('image');selectProduct(product)}} className={styles.icon}/><img src={product.defaultImage} alt="product"/></div>
            <div className={styles.adminControl}>
              <AiFillDelete className={styles.icon} onClick={()=>userContext.DeleteProduct(product.id)}/>
            </div>
            <h4 className={styles.name}>  <FaEdit onClick={()=>{commonContext.updateIsEdit('name');selectProduct(product)}} className={styles.icon}/> {product.name}</h4>
            <h2 className={styles.description}><FaEdit onClick={()=>{commonContext.updateIsEdit('description');selectProduct(product)}} className={styles.icon}/>{product.description}</h2>
            <h3 className={styles.price}><FaEdit onClick={()=>{commonContext.updateIsEdit('price');selectProduct(product)}} className={styles.icon}/>{product.price} <span>NOK</span></h3>
            <div className={styles.buttonContainer}>
              <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
            </div>
          </>
        :
          <>
            <div className={styles.discount}>{product.discount} % </div>
            <div className={styles.imageContainer}><img src={product.defaultImage} alt="product"/></div>
            <h4 className={styles.name}>{product.name}</h4>
            <h2 className={styles.description}>{product.description}</h2>
            <h3 className={styles.price}>{product.price} NOK</h3>
            <div className={styles.buttonContainer}>
              <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
            </div> 
          </>
        }
      </div>
    </section>
  )
}

export default Card;