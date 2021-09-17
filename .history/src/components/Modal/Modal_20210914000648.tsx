import React from 'react';

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>Shopper</h1>
      </div>
      <div className={styles.logoContainer}>        
        <Logo logo={"search"}/>
        <Logo logo={"user"}/>
        <Logo logo={"cart"}/>
      </div>
    
      
    </header>
  )
}

export default Header
