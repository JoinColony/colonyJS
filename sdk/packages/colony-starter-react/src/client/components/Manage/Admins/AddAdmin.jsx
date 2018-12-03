import React from 'react'
import styles from './AddAdmin.scss'

const AddAdmin = ({
  addAdminError,
  addAdminLoading,
  addAdminSuccess,
  handleChange,
  handleClick,
  userAddress,
}) => (
  <div className={styles.container}>
    <h2>{'Add Admin'}</h2>
    <div className={styles.field}>
      <label htmlFor="userAddress">
        {'Address:'}
      </label>
      <input
        id="userAddress"
        onChange={handleChange}
        placeholder="0x0"
        type="text"
        value={userAddress}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Add Admin'}
      </button>
    </div>
    {addAdminError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {addAdminError}
        </span>
      </div>
    }
    {addAdminLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {addAdminSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default AddAdmin
