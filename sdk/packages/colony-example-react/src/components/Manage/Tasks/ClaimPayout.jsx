import React from 'react'
import styles from './ClaimPayout.module.scss'

const ClaimPayout = ({
  claimPayoutError,
  claimPayoutLoading,
  claimPayoutSuccess,
  handleChange,
  handleClick,
  role,
}) => (
  <div className={styles.container}>
    <h2>{'Claim Payout'}</h2>
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
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Claim Payout'}
      </button>
    </div>
    {claimPayoutError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {claimPayoutError}
        </span>
      </div>
    }
    {claimPayoutLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {claimPayoutSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default ClaimPayout
