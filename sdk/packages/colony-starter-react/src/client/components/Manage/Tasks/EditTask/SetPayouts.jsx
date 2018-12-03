import React from 'react'
import styles from './SetPayouts.scss'

const SetPayouts = ({
  canSetPayouts,
  handleChange,
  payouts,
  setManagerPayout,
  setEvaluatorPayout,
  setWorkerPayout,
  setTaskPayoutError,
  setTaskPayoutLoading,
  setTaskPayoutSuccess,
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
    <div className={styles.buttons}>
      <button className={canSetPayouts() ? null : styles.disabled} onClick={setManagerPayout}>
        {'Set Manager Payout'}
      </button>
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
    <div className={styles.buttons}>
      <button className={canSetPayouts() ? null : styles.disabled} onClick={setEvaluatorPayout}>
        {'Set Evaluator Payout'}
      </button>
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
      <button className={canSetPayouts() ? null : styles.disabled} onClick={setWorkerPayout}>
        {'Set Worker Payout'}
      </button>
    </div>
    {setTaskPayoutError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {setTaskPayoutError}
        </span>
      </div>
    }
    {setTaskPayoutLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {setTaskPayoutSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SetPayouts
