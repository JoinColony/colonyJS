import React from 'react'
import styles from './CreateColony.scss'

const CreateColony = ({
  createColonyError,
  createColonyLoading,
  createColonySuccess,
  handleChange,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Create Colony'}</h2>
    <div className={styles.field}>
      <label htmlFor="tokenAddress">
        {'Token Address:'}
      </label>
      <input
        id="tokenAddress"
        onChange={handleChange}
        placeholder="0x0"
        type="text"
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Create Colony'}
      </button>
    </div>
    {createColonyError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {createColonyError}
        </span>
      </div>
    }
    {createColonyLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
  </div>
)

export default CreateColony
