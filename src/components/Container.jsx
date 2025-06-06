import React from 'react'
import styles from './container.module.css';

function Container({children}) {
  return (
    <div className={styles.parentContainer}>{children}</div>
  )
}

export default Container