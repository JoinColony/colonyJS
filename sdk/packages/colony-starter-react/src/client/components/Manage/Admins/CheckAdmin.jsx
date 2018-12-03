import React from 'react'
import styles from './CheckAdmin.scss'

const CheckAdmin = ({
  admin,
  checkAdminError,
  checkAdminLoading,
  checkAdminSuccess,
  handleChange,
  handleClick,
  userAddress,
}) => (
  <div className={styles.container}>
    <h2>{'Check Admin'}</h2>
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
        {'Check Admin'}
      </button>
    </div>
    {checkAdminError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {checkAdminError}
        </span>
      </div>
    }
    {checkAdminLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {checkAdminSuccess &&
      <div className={styles.message}>
        {admin ?
          <span>
            {'true' }
          </span>
        :
          <span>
            {'false' }
          </span>
        }
      </div>
    }
  </div>
)

export default CheckAdmin
