import React,{useEffect,useContext} from 'react'
import styles from './shop.module.css'

//components
import Card from "../../components/Card/Card"
import EditModal from '../../components/EditModal/EditModal'
import AddModal from '../../components/AddModal/AddModal'

//context
import CommonContext from '../../context/common'
import UserContext from '../../context/user'

const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit
  const role = userContext.role
  const add = commonContext.isAdd
  const updateIsAdd = commonContext.updateIsAdd


  useEffect(()=>{
    updateIsLoading(true)
    commonContext.getAllProducts()
    updateIsLoading(false)
  },[products,add])

  return (
    <>
      {(add) && (<AddModal/>)}
      {(edit) && (<EditModal/>)}
      {(!isLoading) && (
        <div className={styles.container}>
          {(role==='ADMIN' && !add) && (<button type="button" onClick={() =>updateIsAdd(true)} className={styles.addButton}>Add Product</button>)}
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
