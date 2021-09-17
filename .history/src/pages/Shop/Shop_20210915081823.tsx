import React,{useState, useEffect,useContext} from 'react';
import Card from "../../components/Card/Card"
import {IProduct} from "../../interfaces"
import {Get} from "../../api/api"
import styles from './shop.module.css'


const Shop: React.FunctionComponent = () => {

  const [loading,setLoading] = useState<boolean>(false)
  const [list,setList] = useState<IProduct[]>([])
  const [isError,setIsError] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(true)
    Get.getProducts()
    .then((response)=>{
      setList(response)
      setLoading(false)
    })
    .catch((error)=>setIsError(true))
  },[products])

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
