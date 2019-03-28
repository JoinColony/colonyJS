import React from 'react'
import styles from './MoveFunds.scss'

const MoveFunds = ({
  funding,
  moveFundsError,
  moveFundsLoading,
  moveFundsSuccess,
  handleClick,
  handleChange,
}) => (
  <div className={styles.container}>
    <h2>{'Move Funds'}</h2>
    <div className={styles.field}>
      <label htmlFor="fromPot">
        {'From Pot:'}
      </label>
      <input
        id="fromPot"
        onChange={handleChange}
        type="number"
        value={funding.fromPot}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="toPot">
        {'To Pot:'}
      </label>
      <input
        id="toPot"
        onChange={handleChange}
        type="number"
        value={funding.toPot}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="amount">
        {'Amount:'}
      </label>
      <input
        id="amount"
        onChange={handleChange}
        type="number"
        value={funding.amount}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Move Funds'}
      </button>
    </div>
    {moveFundsError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {moveFundsError}
        </span>
      </div>
    }
    {moveFundsLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {moveFundsSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default MoveFunds
