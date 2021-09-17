import React,{useContext, useState} from 'react';
import styles from './editModal.module.css';
import {IItem} from "../../interfaces"
import UserContext from '../../context/user'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'


const EditModal: React.FunctionComponent<IItem> = ({product}) => {  
  const userContext = useContext(UserContext)
  
  const [isEdit, setIsEdit] = useState<string>('')
  const nameEdit = ()=>{
    setIsEdit('name')
  }
  return( 
    <section  >
      
    </section>
  )
}

export default EditModal;