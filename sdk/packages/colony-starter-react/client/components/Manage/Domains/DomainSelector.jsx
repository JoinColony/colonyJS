import React from 'react'
import styles from './DomainSelector.scss'

const DomainSelector = ({ handleChange, domainId, domains }) => (
  <div className={styles.field}>
    <label htmlFor="domainId">
      {'Domain:'}
    </label>
    <select id="domainId" onChange={handleChange} value={domainId}>
      <option value={0}>
        {'select domain...'}
      </option>
      {domains ? domains.slice(1).map(domain => (
        <option key={domain.id} value={domain.id}>
          {domain.id}
        </option>
      )) : (
        <option value={null}>
          {'loading...'}
        </option>
      )}
    </select>
  </div>
)

export default DomainSelector
