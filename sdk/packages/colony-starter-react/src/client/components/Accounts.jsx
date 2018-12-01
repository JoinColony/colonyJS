import React from 'react'
import styles from './Accounts.scss'

const Accounts = ({
  accounts,
  getAccountsError,
  getAccountsLoading,
  getAccountsSuccess,
  selectAccount,
}) => (
  <div className={styles.container}>
    <div className={styles.selector}>
      <h2 className={styles.title}>
        {'Select Account'}
      </h2>
      {getAccountsLoading &&
        <div className={styles.message}>
          {'connecting to colonyNetwork...'}
        </div>
      }
      {getAccountsError &&
        <div className={styles.message}>
          {getAccountsError}
        </div>
      }
      {accounts && !getAccountsLoading && !getAccountsError &&
        <ul className={styles.list}>
          {accounts.map((account, index) => (
            <li key={index} onClick={() => selectAccount(index)}>
              {account}
            </li>
          ))}
        </ul>
      }
    </div>
  </div>
)

export default Accounts
