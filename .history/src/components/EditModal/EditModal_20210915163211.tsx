import React,{useContext, useState} from 'react';
import styles from './editModal.module.css';
import {IItem} from "../../interfaces"
import UserContext from '../../context/user'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'


const EditModal: React.FunctionComponent = () => {  
    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        Hello
      </div>
    </section>
  )
}

export default EditModal;