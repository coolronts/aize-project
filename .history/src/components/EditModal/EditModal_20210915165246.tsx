import React,{useContext, useState} from 'react';
import styles from './editModal.module.css';
import CommonContext from '../../context/common'
import {MdCancel} from 'react-icons/md'


const EditModal: React.FunctionComponent = () => {  
    const commonContext = useContext(CommonContext)
    const updateEdit = commonContext.updateIsEdit
    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        <MdCancel className={styles.icon} onClick={()=>updateEdit('')}/>
        <h2>Edit the {edit} </h2>
        <input type="text"/>
        <button type="button" >Save</button>
      </div>
    </section>
  )
}

export default EditModal;