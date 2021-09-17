import React,{useContext, useEffect, useState} from 'react'
import styles from './editModal.module.css'
import CommonContext from '../../context/common'
import {MdCancel} from 'react-icons/md'
import {Put} from '../../api/api'


const EditModal: React.FunctionComponent = () => {  
    const commonContext = useContext(CommonContext)
    const updateEdit = commonContext.updateIsEdit
    const edit = commonContext.isEdit
    const selectedProduct = commonContext.selectedProduct
    const [newValue, setNewValue] = useState<number|string>('')

    const save = ()=>{
      if(edit==='name' && typeof(newValue)==='string'){
        selectedProduct.name = newValue
      }
    }

    useEffect(()=>{
      if(edit==='name'){setNewValue(selectedProduct.name)}
    },[])
    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        <MdCancel className={styles.icon} onClick={()=>updateEdit('')}/>
        <h2>Edit the {edit} </h2>
        <input type="text" onChange={(e)=>setNewValue(e.target.value)}  value={newValue}  />
        <button type="button" onClick={()=>save()} >Save</button>
      </div>
    </section>
  )
}

export default EditModal;