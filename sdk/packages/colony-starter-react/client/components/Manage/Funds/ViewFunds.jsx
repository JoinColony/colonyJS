import React from 'react'
import styles from './ViewFunds.scss'

const ViewFunds = ({
  getPotsError,
  getPotsLoading,
  getPotsSuccess,
  pots,
}) => (
  <div className={styles.container}>
    <h2>{'View Funds'}</h2>
    {!pots || getPotsLoading ?
      <div>{'loading...'}</div>
    :
      <div>
        <h3>{'Colony'}</h3>
        <ul className={styles.list}>
          {pots.slice(0, 1).map(pot => (
            <li key={pot.id} className={styles.item}>
              <p className={styles.title}>
                {pot.title}
              </p>
              <p>{'Pot ID: ' + pot.id}</p>
              <p>{'Balance: ' + pot.balance}</p>
              <p>{'Type: ' + pot.type}</p>
            </li>
          ))}
        </ul>
        <h3>{'Domains'}</h3>
        <ul className={styles.list}>
          {pots.slice(1, 4).map(pot => (
            <li key={pot.id} className={styles.item}>
              <p className={styles.title}>
                {pot.title}
              </p>
              <p>{'Pot ID: ' + pot.id}</p>
              <p>{'Balance: ' + pot.balance}</p>
              <p>{'Type: ' + pot.type}</p>
            </li>
          ))}
        </ul>
        <h3>{'Tasks'}</h3>
        <ul className={styles.list}>
          {pots.slice(4).map(pot => (
            <li key={pot.id} className={styles.item}>
              <p className={styles.title}>
                {pot.title}
              </p>
              <p>{'Pot ID: ' + pot.id}</p>
              <p>{'Balance: ' + pot.balance}</p>
              <p>{'Type: ' + pot.type}</p>
            </li>
          ))}
        </ul>
      </div>
    }
  </div>
)

export default ViewFunds
