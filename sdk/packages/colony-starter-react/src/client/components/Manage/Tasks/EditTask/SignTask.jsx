import React from 'react'
import styles from './SignTask.scss'

const SignTask = ({
  canSignTask,
  handleClick,
  signTaskError,
  signTaskLoading,
  signTaskSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Sign Task'}</h2>
    <div className={styles.buttons}>
      <button className={canSignTask() ? null : styles.disabled} onClick={handleClick}>
        {'Sign Task'}
      </button>
    </div>
    {signTaskError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {signTaskError}
        </span>
      </div>
    }
    {signTaskLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {signTaskSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SignTask
