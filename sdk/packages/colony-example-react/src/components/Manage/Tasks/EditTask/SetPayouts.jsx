import React from 'react'
import styles from './SetPayouts.module.scss'

const SetPayouts = ({
  canSetPayouts,
  handleChange,
  payouts,
  handleClick,
  setTaskPayoutsError,
  setTaskPayoutsLoading,
  setTaskPayoutsSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Set Payouts'}</h2>
    <div className={styles.field}>
      <label htmlFor="manager">
        {'Manager:'}
      </label>
      <input
        id="manager"
        onChange={handleChange}
        placeholder={0}
        type="number"
        value={payouts.manager}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="evaluator">
        {'Evaluator:'}
      </label>
      <input
        id="evaluator"
        onChange={handleChange}
        placeholder={0}
        type="number"
        value={payouts.evaluator}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="worker">
        {'Worker:'}
      </label>
      <input
        id="worker"
        onChange={handleChange}
        placeholder={0}
        type="number"
        value={payouts.worker}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetPayouts() ? null : styles.disabled} onClick={handleClick}>
        {'Set Payouts'}
      </button>
    </div>
    {setTaskPayoutsError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {setTaskPayoutsError}
        </span>
      </div>
    }
    {setTaskPayoutsLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {setTaskPayoutsSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SetPayouts
