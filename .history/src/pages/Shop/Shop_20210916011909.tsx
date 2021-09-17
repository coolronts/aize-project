import React,{useEffect,useContext} from 'react';
import Card from "../../components/Card/Card"
import styles from './shop.module.css'
import CommonContext from '../../context/common';
import UserContext from '../../context/user'
import EditModal from '../../components/EditModal/EditModal';

const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit
  const role = userContext.role
  const isAdd = commonContext.isAdd


  useEffect(()=>{
    updateIsLoading(true)
    commonContext.getAllProducts()
    updateIsLoading(false)
  },[edit])

  return (
    <>
      {(edit) && (<EditModal/>)}
      {(!isLoading) && (
        <div className={styles.container}>
          {(role==='ADMIN') && (<button type="button" onClick={() => } className={styles.addButton}>Add Product</button>)}
          <div className={styles.list}>
            {products.map((item,index)=>(
              <div  className={styles.card} key={index}>
                <Card product={item} />
              </div>    
            ))}
          </div>
        </div>
      )}
    </>
    )
  };

export default Shop;
