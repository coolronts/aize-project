import React,{useEffect,useContext} from 'react';
import Card from "../../components/Card/Card"
import styles from './shop.module.css'
import CommonContext from '../../context/common';


const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)

  useEffect(()=>{
    commonContext.getAllProducts()
  },[])

  return (
    <>
      {(!loading && !isError) && (
        <div className={styles.list}>
          {list.map((item,index)=>(
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
