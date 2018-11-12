import React from 'react'
import styles from './FundDomain.scss'

const FundDomain = ({
  funding,
  fundDomainError,
  fundDomainLoading,
  fundDomainSuccess,
  handleClick,
  handleChange,
}) => (
  <div className={styles.container}>
    <h2>{'Fund Domain'}</h2>
    <div className={styles.field}>
      <label htmlFor="domainId">
        {'Domain:'}
      </label>
      <select id="domainId" onChange={handleChange} value={funding.domainId}>
        <option value={0}>
          {'select domain...'}
        </option>
        <option value={2}>
          {'Business'}
        </option>
        <option value={3}>
          {'Education'}
        </option>
        <option value={4}>
          {'Service'}
        </option>
      </select>
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
        {'Fund Domain'}
      </button>
    </div>
    {fundDomainError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {fundDomainError}
        </span>
      </div>
    }
    {fundDomainLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {fundDomainSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default FundDomain
