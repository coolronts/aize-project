import React,{useEffect,useContext} from 'react';
import Card from "../../components/Card/Card"
import styles from './shop.module.css'
import CommonContext from '../../context/common';
import Modal from '../../components/Modal/Modal'

const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading

  useEffect(()=>{
    commonContext.getAllProducts()
  },[])

  return (
    <>
      {(!isLoading) ? (
        <div className={styles.list}>
          {products.map((item,index)=>(
            <div  className={styles.card} key={index}>
              <Card product={item} />
            </div>    
          ))}
        </div>
      ):<Modal/>}
    </>
    )
  };

export default Shop;
