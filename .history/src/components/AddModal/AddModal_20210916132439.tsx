import React,{useContext, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import {IProduct} from '../../interfaces'
import {Post} from '../../api/api'

const AddModal: React.FunctionComponent = () => {

  const commonContext = useContext(CommonContext)
  
  const [file, setFile] = useState<string>('')
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = data => console.log(data);

  console.log(watch("name")) // watch input value by passing the name of it

  const uploadImage =(event:any)=>{
    let recievedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(recievedFile);
    reader.onload = function () {
      if(typeof(reader.result)==='string'){
        console.log(reader.result)
        setFile(reader.result)}
      };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    console.log(file)
  }

  return (
    <section className={styles.container}>
        <div className={styles.modal}>
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
              <input defaultValue="asd" {...register("defaultImage")} />

              <input onChange={(e)=>uploadImage(e)}  type="file"  accept=".jpeg, .png, .jpg" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    )
  };

export default AddModal;
