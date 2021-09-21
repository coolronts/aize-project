import React, {useContext, useState} from 'react'
import styles from './search.module.css'
import { useDebouncedCallback } from 'use-debounce';

//icons
import {MdCancel} from "react-icons/md"

//interface
import {IProduct} from '../../utils/interfaces'

//context
import CommonContext from '../../context/common'

//api
import {Get} from "../../api/api"

const Search: React.FunctionComponent= () => {
  const commonContext = useContext(CommonContext)

  const [searchItems, setSearchItems] = useState<IProduct[]>([])

  const isSearch = commonContext.isSearch
  const updateSearch = commonContext.updateIsSearch

  const debounced = useDebouncedCallback(
    (keyword:any) => {
      if(keyword.length===0){updateSearch(false)}
      else{
        updateSearch(true)
        Get.searchProduct(keyword)
        .then(result => {setSearchItems(()=>result.slice(0,5))})
      }
    },
    1000
  );


  return (
    <div className={styles.searchContainer}>
      <input type="text" onChange={(e)=>debounced(e.target.value)} className={styles.searchBox}/> 
      <MdCancel onClick={()=>updateSearch(false)} />      
      <div className={styles.suggestionContainer}>
        {isSearch && searchItems.map((item,index)=>{
          return(
            <div key={index} className={styles.suggestionContainer}>
              <div className={styles.suggestion}>
                <div className={styles.imageContainer}>
                  <img src={item.defaultImage} alt="product"/>
                </div>
                
                <div className={styles.info}>
                  <p className={styles.name}>{item.name}</p>
                  <p>Price: {item.price} Nok</p>
                  <p>Discount:  -{item.discount}%</p>
                </div>
              </div>
              <hr></hr>
            </div> 
          )
        })}
      </div>
    </div>
  )      
        
}

export default Search
