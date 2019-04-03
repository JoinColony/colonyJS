import React from 'react'
import styles from './ClaimFunds.module.scss'

const ClaimFunds = ({
  claimableFunds,
  claimFundsError,
  claimFundsLoading,
  claimFundsSuccess,
  getClaimableFundsError,
  getClaimableFundsLoading,
  getClaimableFundsSuccess,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Claim Funds'}</h2>
    <div className={styles.field}>
      <label>
        {'Claimable Funds:'}
      </label>
      <span>
        {!getClaimableFundsLoading ? claimableFunds : 'loading...'}
      </span>
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Claim Funds'}
      </button>
    </div>
    {claimFundsError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {claimFundsError}
        </span>
      </div>
    }
    {claimFundsLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {claimFundsSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default ClaimFunds
