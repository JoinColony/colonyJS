import React from 'react'
import styles from './Home.module.scss'

const Home = ({ networkClient }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <p>{`Account Address: ${networkClient.contract.signer.address}`}</p>
      <p>{`Network Address: ${networkClient.contract.address}`}</p>
    </div>
  </div>
)

export default Home
