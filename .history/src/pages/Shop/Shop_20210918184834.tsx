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
  const add = commonContext.isAdd
  const updateIsAdd = commonContext.updateIsAdd

  const role = userContext.role

  useEffect(()=>{
    updateIsLoading(true)
    commonContext.getAllProducts()
    updateIsLoading(false)
  },[add])

  return (
  
    <>
      {(add) && (<AddModal/>)}
      {(edit) && (<EditModal/>)}
      {(!isLoading) && (
        <div className={`styles.container ${add ? 'error' : 'success'}`}  >
          {(role==='ADMIN' && !add) && (<div className={styles.addButton}><button type="button" onClick={() =>updateIsAdd(true)}>Add Product</button></div>)}
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
