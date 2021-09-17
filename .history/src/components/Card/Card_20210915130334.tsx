import React,{useContext, useState} from 'react';
import styles from './card.module.css';
import {IItem} from "../../interfaces"
import UserContext from '../../context/user'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'


const Card: React.FunctionComponent<IItem> = ({product}) => {  
  const userContext = useContext(UserContext)
  const role = userContext.role
  const [isEdit, setIsEdit] = useState<boolean>(false)
  return( 
    <section  >
      <div className={styles.container}>
  
        <div className={styles.card}>
          <div className={styles.discount}>
            {product.discount} %
          </div>
          <div className={styles.imageContainer}>
            <img src={product.defaultImage} alt="product"/>
          </div>
          {role ==='ADMIN'&&
            <>
            <div className={styles.adminControl}>
              <AiFillDelete className={styles.icon}  onClick={()=>userContext.DeleteProduct(product.id)}/>
            </div>
          <h4  className={styles.name}>  <FaEdit className={styles.icon}/>{product.name}</h4>
              <h2 className={styles.description}><FaEdit/>{product.description}</h2>
              <h3 className={styles.price}><FaEdit/>{product.price} <span>NOK</span></h3>
              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
              </div>
              </>
          }
          
            
              <h4 className={styles.name}>{product.name}</h4>
              <h2 className={styles.description}>{product.description}</h2>
              <h3 className={styles.price}>{product.price} <span>NOK</span></h3>
              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
              </div>
            
          )

        
        </div>
      </div>
    </section>
  )
}

export default Card;