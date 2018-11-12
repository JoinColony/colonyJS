import React from 'react'
import styles from './ViewColony.scss'

const ViewColony = ({ address }) => (
  <div className={styles.container}>
    <h2>{'View Colony'}</h2>
    <p>{'Colony Address: ' + address}</p>
  </div>
)

export default ViewColony
