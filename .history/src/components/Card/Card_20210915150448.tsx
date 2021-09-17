import React,{useContext, useState} from 'react';
import styles from './card.module.css';
import {IItem} from "../../interfaces"
import UserContext from '../../context/user'
import CommonContext from '../../context/common'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import EditModal from '../EditModal/EditModal'


const Card: React.FunctionComponent<IItem> = ({product}) => {  
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)
  const role = userContext.role
  const edit = commonContext.isEdit
  const [isEdit, setIsEdit] = useState<string|null>(null)
  return( 
    <section  >
      {isEdit !== '' && <EditModal/>}
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.discount}>
            {product.discount} %
          </div>
          <div className={styles.imageContainer}>
            <img src={product.defaultImage} alt="product"/>
          </div>
          {role ==='ADMIN'?
            <>
            <div className={styles.adminControl}>
              <AiFillDelete className={styles.icon}  onClick={()=>userContext.DeleteProduct(product.id)}/>
            </div>
            {(isEdit === null||'name') && <h4 className={styles.name}>  <FaEdit onClick={()=>{
              setIsEdit('name')
              console.log(isEdit)
            }
              } className={styles.icon}/> {product.name}</h4>}
            {(isEdit === null||'description') &&  <h2 className={styles.description}><FaEdit className={styles.icon}/>{product.description}</h2>}
              <h3 className={styles.price}><FaEdit className={styles.icon}/>{product.price} <span>NOK</span></h3>
              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
              </div>
              </>
        :
            (<>
              <h4 className={styles.name}>{product.name}</h4>
              <h2 className={styles.description}>{product.description}</h2>
              <h3 className={styles.price}>{product.price} <span>NOK</span></h3>
              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => {userContext.addProduct(product.id,1)}}>Add to Cart</button>
              </div> </>) 
          }
          

        
        </div>
      </div>
    </section>
  )
}

export default Card;