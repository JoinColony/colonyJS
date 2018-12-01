import React from 'react'
import styles from './SubmitWork.scss'

const SubmitWork = ({
  deliverable,
  handleChange,
  handleClick,
  submitWorkError,
  submitWorkLoading,
  submitWorkSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Submit Work'}</h2>
    <div className={styles.field}>
      <label htmlFor="message">
        {'message:'}
      </label>
      <input
        id="message"
        onChange={handleChange}
        placeholder="message"
        type="text"
        value={deliverable.message}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Submit Work'}
      </button>
    </div>
    {submitWorkError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {submitWorkError}
        </span>
      </div>
    }
    {submitWorkSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
    {submitWorkLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
  </div>
)

export default SubmitWork
