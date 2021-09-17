import React,{useContext, useState, useEffect, useRef} from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { MdCancel } from 'react-icons/md';
import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import {IProduct} from '../../interfaces'
import {Post} from '../../api/api'

const AddModal: React.FunctionComponent = () => {

  const commonContext = useContext(CommonContext)
  
  const [file, setFile] = useState<string>()
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const updateAdd = commonContext.updateIsAdd
  const { register, handleSubmit, watch,control,setValue, formState: { errors,isDirty, isSubmitting, touchedFields, submitCount  } } = useForm<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = data => console.log(data);

  useEffect(() => {
    console.log(watch('defaultImage'))
    
    
  },[file])


  console.log(watch("defaultImage")) // watch input value by passing the name of it
  const updateState=(data:string)=>{
    setFile(data)
  }
  const uploadImage =(event:any)=>{
    event.preventDefault()
    let recievedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(recievedFile);
    reader.onload = function () {
      if(typeof(reader.result)==='string'){
        console.log(reader.result,"result")
        setValue('defaultImage', reader.result)
        console.log(file, "file")
      }
      };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    
  }

  return (
    <section className={styles.container}>
        <div className={styles.modal}>
          <MdCancel className={styles.icon} onClick={()=>updateAdd(false)}/>
          <h2>Add your New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="" {...register("images")} />
        
            <div className={styles.inputGroup}>
              <label>Name  </label>
              <input type="text" {...register("name")}  name="name"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Description  </label>
              <textarea {...register("description")}  name="description"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Price  </label>
              <input type="number" {...register("price")}  name="price"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Discount  </label>
              <input type="number" {...register("discount")} name="discount"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Image  </label>
              
              <input value={file} {...register("defaultImage")}  />

              <input  onChange={(e)=>uploadImage(e)}  type="file"  accept=".jpeg, .png, .jpg" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    )
  };

export default AddModal;
