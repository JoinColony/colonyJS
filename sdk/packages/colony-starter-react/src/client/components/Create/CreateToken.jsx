import React from 'react'
import styles from './CreateToken.scss'

const CreateToken = ({
  createTokenError,
  createTokenLoading,
  createTokenSuccess,
  handleChange,
  handleClick,
  token,
  tokenAddress,
}) => (
  <div className={styles.container}>
    <h2>{'Create Token'}</h2>
    <div className={styles.field}>
      <label htmlFor="name">
        {'Name:'}
      </label>
      <input
        id="name"
        onChange={handleChange}
        placeholder="token"
        type="text"
        value={token.name}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="symbol">
        {'Symbol:'}
      </label>
      <input
        id="symbol"
        onChange={handleChange}
        placeholder="TKN"
        type="text"
        value={token.symbol}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Create Token'}
      </button>
    </div>
    {createTokenError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {createTokenError}
        </span>
      </div>
    }
    {createTokenLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {createTokenSuccess &&
      <div className={styles.message}>
        {'Token Address: ' + tokenAddress}
      </div>
    }
  </div>
)

export default CreateToken
