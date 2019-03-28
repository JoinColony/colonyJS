import React from 'react'
import styles from './ViewDomains.scss'

const ViewDomains = ({
  domains,
  getDomainsError,
  getDomainsLoading,
  getDomainsSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'View Domains'}</h2>
    {!domains || getDomainsLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {domains.map((domain, index) => (
          <li key={index} className={styles.item}>
            <p>{'Skill ID: ' + domain.localSkillId}</p>
            <p>{'Pot ID: ' + domain.potId}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewDomains
