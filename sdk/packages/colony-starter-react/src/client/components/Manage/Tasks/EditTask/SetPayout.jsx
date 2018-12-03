import React from 'react'
import styles from './SetPayout.scss'

const SetPayout = ({
  amount,
  canSetPayout,
  handleChange,
  handleClick,
  payouts,
  role,
  setTaskPayoutError,
  setTaskPayoutLoading,
  setTaskPayoutSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Set Payout'}</h2>
    <div>
      <p>{'Manager:' + payouts.manager}</p>
      <p>{'Evaluator:' + payouts.evaluator}</p>
      <p>{'Worker:' + payouts.worker}</p>
    </div>
    <div className={styles.field}>
      <label htmlFor="role">
        {'role:'}
      </label>
      <select id="role" value={role} onChange={handleChange}>
        <option value={'MANAGER'}>
          {'Manager'}
        </option>
        <option value={'EVALUATOR'}>
          {'Evaluator'}
        </option>
        <option value={'WORKER'}>
          {'Worker'}
        </option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="amount">
        {'amount:'}
      </label>
      <input
        id="amount"
        onChange={handleChange}
        placeholder={0}
        type="number"
        value={amount}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetPayout() ? null : styles.disabled} onClick={handleClick}>
        {'Set Payout'}
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

export default SetPayout
