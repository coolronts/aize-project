import React from 'react';
import styles from './modal.module.css'

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>Please Select your Role</h1>
      </div>
    </div>
  )
}

export default Header
