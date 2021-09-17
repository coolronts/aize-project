import React,{useContext, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import {IProduct} from '../../interfaces'
import UserContext from '../../context/user'
import {uploadImage} from '../../handler'

const AddModal: React.FunctionComponent = () => {

  const commonContext = useContext(CommonContext)
  const [base64, setBase64]=useState<string>('')
  const [file, setFile] = useState<any>()
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit
  const imageString = uploadImage(file)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = data => console.log(data);

  console.log(watch("name")) // watch input value by passing the name of it



  return (
    <section className={styles.container}>
        <div className={styles.modal}>
          <h2>Add your New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <input type="text" style={{display:"none"}} name="image" />
              <input type="file" name="defaultImage" accept=".jpeg, .png, .jpg" onChange={(e)=>setFile(e.target.files)} />
            </div>
            <button type="button">Save</button>
          </form>
        </div>
      </section>
    )
  };

export default AddModal;
