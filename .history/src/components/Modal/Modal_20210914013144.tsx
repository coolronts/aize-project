import React, { useContext } from 'react';
import styles from './modal.module.css'
import UserContext from '../../context/user'


const Modal: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h4>Please Select your Role</h4>
        <hr/>
        <button onClick={()=>{
          !userContext.id && userContext.addUser(Math.floor(Math.random() * 100))
          console.log(userContext.id)
          }}>
        User</button>
        <button>Admin</button>
      </div>
    </div>
  )
}

export default Modal
