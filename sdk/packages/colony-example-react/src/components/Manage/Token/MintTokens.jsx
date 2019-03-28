import React from 'react'
import styles from './MintTokens.module.scss'

const MintTokens = ({
  amount,
  handleChange,
  handleClick,
  mintTokensError,
  mintTokensLoading,
  mintTokensSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Mint Tokens'}</h2>
    <div className={styles.field}>
      <label htmlFor="amount">
        {'Amount:'}
      </label>
      <input
        id="amount"
        onChange={handleChange}
        placeholder="amount"
        type="number"
        value={amount}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Mint Tokens'}
      </button>
    </div>
    {mintTokensError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {mintTokensError}
        </span>
      </div>
    }
    {mintTokensLoading &&
      <div className={styles.message}>
        {'loading...'}
      </div>
    }
    {mintTokensSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default MintTokens
