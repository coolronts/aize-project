import React, { useContext, useState , useEffect } from 'react';
import styles from './modal.module.css'
import UserContext from '../../context/user'
import CommonContext from '../../context/common'
import {Get} from '../../api/api'

const Modal: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {commonContext.isLoading &&
          (<>
            <div className={styles.loader}></div>
          </>)
        // : (<>
        // <h4>Please Select your Role</h4>
        // <hr/>
        // <button onClick={()=>{
        //   !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2)
        // }}>
        // User</button>
        // <button onClick={()=>{
        //   !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2 + 1)
        // }}>Admin</button>
        // </>)}
      </div>
    </div>
  )
}

export default Modal
