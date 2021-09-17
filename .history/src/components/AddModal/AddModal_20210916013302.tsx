import React,{useEffect,useContext} from 'react';
import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import UserContext from '../../context/user'

const AddModal: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit


  return (
    <section className={styles.container}>
        <div className={styles.modal}>
          <h2>Add your New Product</h2>
          <div className={styles.inputGroup}>
            <label>Name  </label>
            <input type="text" name="name"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Description  </label>
            <textarea name="description"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Price  </label>
            <input type="number" name="price"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Discount  </label>
            <input type="number"name="discount"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Image  </label>
            <input type="file" accept=".jpeg, .png, .jpg" />
          </div>
          
          
          <button type="button">Save</button>
        </div>
      </section>
    )
  };

export default AddModal;
