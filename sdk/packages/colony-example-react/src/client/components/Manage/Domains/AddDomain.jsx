import React from 'react'
import styles from './AddDomain.scss'

const AddDomain = ({
  addDomainError,
  addDomainLoading,
  addDomainSuccess,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Add Domain'}</h2>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Add Domain'}
      </button>
    </div>
    {addDomainError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {addDomainError}
        </span>
      </div>
    }
    {addDomainLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {addDomainSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default AddDomain
