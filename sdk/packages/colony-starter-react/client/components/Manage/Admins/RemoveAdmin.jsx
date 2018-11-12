import React from 'react'
import styles from './RemoveAdmin.scss'

const RemoveAdmin = ({
  handleChange,
  handleClick,
  removeAdminError,
  removeAdminLoading,
  removeAdminSuccess,
  userAddress,
}) => (
  <div className={styles.container}>
    <h2>{'Remove Admin'}</h2>
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
        {'Remove Admin'}
      </button>
    </div>
    {removeAdminError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {removeAdminError}
        </span>
      </div>
    }
    {removeAdminLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {removeAdminSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default RemoveAdmin
