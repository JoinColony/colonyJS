import React from 'react'
import styles from './ViewAdmins.scss'

const ViewAdmins = ({
  admins,
  getAdminsError,
  getAdminsLoading,
  getAdminsSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'View Admins'}</h2>
    {!admins || getAdminsLoading ?
      <div>{'loading...'}</div>
    :
      <div>
        <h3>{'Admins'}</h3>

        <p>{'not available'}</p>

        <ul className={styles.list}>
          {admins.map((admin, index) => (
            <li key={index} className={styles.item}>
              <p className={styles.title}>
                {admin.address}
              </p>
            </li>
          ))}
        </ul>
      </div>
    }
  </div>
)

export default ViewAdmins
