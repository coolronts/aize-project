import React,{useEffect,useContext} from 'react';
import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import UserContext from '../../context/user'

const AddModal: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit

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

export default AddModal;
