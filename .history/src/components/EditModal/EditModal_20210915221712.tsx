import React,{useContext, useEffect, useState} from 'react'
import styles from './editModal.module.css'
import CommonContext from '../../context/common'
import {MdCancel} from 'react-icons/md'
import {Put} from '../../api/api'
import imageToBase64 from 'image-to-base64';

const EditModal: React.FunctionComponent = () => {  
    const commonContext = useContext(CommonContext)
    const updateEdit = commonContext.updateIsEdit
    const edit = commonContext.isEdit
    const updateIsEdit = commonContext.updateIsEdit
    const updateIsLoading = commonContext.updateIsLoading
    const selectedProduct = commonContext.selectedProduct
    const updateProducts = commonContext.getAllProducts
    const [newValue, setNewValue] = useState<number|string>()

    const imageRead =(file:any)=>{
    
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if( reader.result && typeof(reader.result)==='string'){
          setNewValue(reader.result)
        }
        
        console.log("Called", reader);
        console.log(typeof(reader.result))
      }
    }

    const save = ()=>{
      console.log(typeof(newValue))
        updateIsLoading(true)
        if(edit==='name' && typeof(newValue)==='string'){
          console.log(edit)
          selectedProduct.name = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='description' && typeof(newValue)==='string'){
          console.log(edit)
          selectedProduct.description = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='price' && typeof(newValue)==='number'){
          console.log(edit)
          selectedProduct.price = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='discount' && typeof(newValue)==='number'){
          console.log(edit)
          selectedProduct.discount = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='image' && typeof(newValue)==='string'){
          console.log(edit)
          selectedProduct.defaultImage = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }
        updateProducts()
        updateIsEdit('')
        updateIsLoading(false)
        setNewValue('')
      
    }

    useEffect(()=>{
      if(edit==='name'){setNewValue(selectedProduct.name)}
      else if(edit==='description'){setNewValue(selectedProduct.description)}
      else if(edit==='price'){setNewValue((selectedProduct.price))}
      else if(edit==='discount'){setNewValue(selectedProduct.discount)}
    },[edit])

    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        <MdCancel className={styles.icon} onClick={()=>updateEdit('')}/>
        <h2>Edit the {edit} </h2>
        { (edit==='name'||edit==='description') && <input type="text" onChange={(e)=>setNewValue(e.target.value)}  value={newValue}  />}
        { (edit==='price'||edit==='discount') && <input type="number" step="any" onChange={(e)=>setNewValue(parseInt(e.target.value))}  value={newValue}  />}
        { (edit==='image') && <input type="file"  onChange={(e)=>imageRead(e.target.files)}   value={newValue} accept=".jpef, .png, .jpg" />}
        <button type="button" onClick={()=>save()} >Save</button>
      </div>
    </section>
  )
}

export default EditModal;