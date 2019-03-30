import React from 'react'
import styles from './SetOwner.module.scss'

const SetOwner = ({
  canSetOwner,
  handleClick,
  setTokenOwnerError,
  setTokenOwnerLoading,
  setTokenOwnerSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Set Owner'}</h2>
    <div className={styles.buttons}>
      <button className={canSetOwner() ? null : styles.disabled} onClick={handleClick}>
        {'Set Owner'}
      </button>
    </div>
    {setTokenOwnerError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {setTokenOwnerError}
        </span>
      </div>
    }
    {setTokenOwnerLoading &&
      <div className={styles.message}>
        {'loading...'}
      </div>
    }
    {setTokenOwnerSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default SetOwner
