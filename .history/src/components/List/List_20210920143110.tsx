import React,{useEffect,useContext} from 'react'
import styles from './shop.module.css'

//components
import Card from "../../components/Card/Card"
import EditModal from '../../components/EditModal/EditModal'
import AddModal from '../../components/AddModal/AddModal'

//context
import CommonContext from '../../context/common'
import UserContext from '../../context/user'

const List: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit
  const add = commonContext.isAdd
  const updateIsAdd = commonContext.updateIsAdd

  const role = userContext.role

  //class 
  const scrollOff = (add||edit) && styles.scrollOff

  useEffect(()=>{
    updateIsLoading(true)
    commonContext.getAllProducts()
    updateIsLoading(false)
  },[add])

  return (
    <div className={styles.list}>
      {products.map((item)=>(
        <div  className={styles.card} key={item.id}>
          <Card product={item} />
        </div>    
      ))}
    </div>
  )
};

export default List;
