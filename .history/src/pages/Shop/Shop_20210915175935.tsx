import React,{useEffect,useContext} from 'react';
import Card from "../../components/Card/Card"
import styles from './shop.module.css'
import CommonContext from '../../context/common';
import EditModal from '../../components/EditModal/EditModal';

const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const edit = commonContext.isEdit

  useEffect(()=>{
    commonContext.getAllProducts()
  },[])

  return (
    <>
      {(edit) && (<EditModal/>)}
      {(!isLoading) && (
        <div className={styles.list}>
          {products.map((item,index)=>(
            <div  className={styles.card} key={index}>
              <Card product={item} />
            </div>    
          ))}
        </div>
      )}
    </>
    )
  };

export default Shop;
