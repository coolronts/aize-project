import React from 'react'
import styles from './list.module.css'

//components
import Card from "../../components/Card/Card"

//interface
import {IProduct} from '../../utils/interfaces'

const List: React.FunctionComponent<IProduct[]> = (products) => {

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
