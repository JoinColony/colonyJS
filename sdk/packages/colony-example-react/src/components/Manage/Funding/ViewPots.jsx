import React from 'react'
import styles from './ViewPots.module.scss'

const ViewPots = ({
  getPotsError,
  getPotsLoading,
  getPotsSuccess,
  pots,
}) => (
  <div className={styles.container}>
    <h2>{'View Pots'}</h2>
    {!pots || getPotsLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {pots.map(pot => (
          <li key={pot.id} className={styles.item}>
            <p>{'Pot ID: ' + pot.id}</p>
            <p>{'Balance: ' + pot.balance}</p>
            <p>{'Type: ' + pot.type}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewPots
