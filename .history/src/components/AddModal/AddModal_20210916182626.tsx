import React,{useContext} from 'react'
import styles from './addModal.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { MdCancel } from 'react-icons/md'

//context
import CommonContext from '../../context/common'

//interface
import {IProduct} from '../../interfaces'

//api
import {Post} from '../../api/api'

const AddModal: React.FunctionComponent = () => {

  const commonContext = useContext(CommonContext)
  const updateIsLoading = commonContext.updateIsLoading
  const updateAdd = commonContext.updateIsAdd

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IProduct>();
  
  const onSubmit: SubmitHandler<IProduct> = data => {
    updateIsLoading(true)
    Post.addProduct(data)
    updateAdd(false)
    updateIsLoading(false)
  };

  const uploadImage =(event:any)=>{
    event.preventDefault()
    let receivedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(receivedFile);
    reader.onload = function () {
      if(typeof(reader.result)==='string'){setValue('defaultImage', reader.result)}
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
        {(errors.name||errors.description||errors.price||errors.discount||errors.defaultImage) && <p className={styles.error}>Error in the Form</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="" style={{display: "none"}} {...register("images")} />
          <div className={styles.inputGroup}>
            <label>Name  </label>
            <input type="text" {...register("name",{ required: true, min:4})} name="name"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Description  </label>
            <textarea {...register("description",{ required: true, min:4})}  name="description"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Price  </label>
            <input type="number" {...register("price",{ required: true})}  name="price"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Discount  </label>
            <input type="number" {...register("discount",{ required: true})} name="discount"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Image  </label>
            <input onChange={(e)=>uploadImage(e)} type="file"  accept=".jpeg, .png, .jpg" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </section>
    )
  };

export default AddModal;
