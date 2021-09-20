import React from 'react'
import styles from './list.module.css'

//components
import Card from "../../components/Card/Card"

//interface
import {IProduct} from '../../utils/interfaces'

interface IListProp{
  products: IProduct[],
}

const List: React.FunctionComponent<IListProp> = ({products}) => {
  

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
