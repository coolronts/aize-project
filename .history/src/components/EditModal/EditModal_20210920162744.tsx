import React,{useContext, useEffect, useState} from 'react'
import styles from './editModal.module.css'
import {MdCancel} from 'react-icons/md'

//imageToBase64 handler function
import {imgToBase64} from '../../utils/handlerFunctions'

//context
import CommonContext from '../../context/common'

//api
import {Put} from '../../api/api'

const EditModal: React.FunctionComponent = () => {  
    const commonContext = useContext(CommonContext)
    const updateEdit = commonContext.updateIsEdit
    const edit = commonContext.isEdit
    const updateIsEdit = commonContext.updateIsEdit
    const updateIsLoading = commonContext.updateIsLoading
    const selectedProduct = commonContext.selectedProduct
    const updateProducts = commonContext.getAllProducts

    const [newValue, setNewValue] = useState<number|string>()

    useEffect(()=>{
      if(edit==='name'){setNewValue(selectedProduct.name)}
      else if(edit==='description'){setNewValue(selectedProduct.description)}
      else if(edit==='price'){setNewValue((selectedProduct.price))}
      else if(edit==='discount'){setNewValue(selectedProduct.discount)}
    },[edit])


    const uploadImage = async (event:any)=>{
      await imgToBase64(event)
      .then(data=>setNewValue(data))
    }
    
    const save = ()=>{
      updateIsLoading(true)
      if(edit==='name' && typeof(newValue)==='string'){
        selectedProduct.name = newValue
      }else if(edit==='description' && typeof(newValue)==='string'){
        selectedProduct.description = newValue
      }else if(edit==='price' && typeof(newValue)==='number'){
        selectedProduct.price = newValue
      }else if(edit==='discount' && typeof(newValue)==='number'){
        selectedProduct.discount = newValue
      }else if(edit==='image' && typeof(newValue)==='string'){
        selectedProduct.defaultImage = newValue
        
      
      }
      Put.updateProduct(selectedProduct, selectedProduct.id).then(()=>{
        updateProducts()
        updateIsEdit('')
        setNewValue('') 
        updateIsLoading(false)
      } )

      
    }

    return( 
      <section className={styles.container}>
        <div className={styles.modal}>
          <MdCancel className={styles.icon} onClick={()=>updateEdit('')}/>
          <h2>Edit the {edit} </h2>
          { (edit==='name'||edit==='description') && <input type="text" onChange={(e)=>setNewValue(e.target.value)}  value={newValue}  />}
          { (edit==='price'||edit==='discount') && <input type="number" step="any" onChange={(e)=>setNewValue(parseInt(e.target.value))}  value={newValue}  />}
          { (edit==='image') && <input type="file"  onChange={(e)=>uploadImage(e)}  accept=".jpeg, .png, .jpg" />}
          <button type="button" onClick={()=>save()} >Save</button>
        </div>
      </section>
    )
  }

export default EditModal;