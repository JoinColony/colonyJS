import React from 'react'
import styles from './ViewToken.scss'

const ViewToken = ({
  getTokenError,
  getTokenLoading,
  getTokenSuccess,
  token,
}) => (
  <div className={styles.container}>
    <h2>{'View Token'}</h2>
    {!token || getTokenLoading ?
      <div>{'loading...'}</div>
    :
      <div>
        <p>{'Address: ' + token.address}</p>
        <p>{'Name: ' + token.name}</p>
        <p>{'Symbol: ' + token.symbol}</p>
        <p>{'Decimals: ' + token.decimals}</p>
        <p>{'Total Supply: ' + token.supply}</p>
      </div>
    }
  </div>
)

export default ViewToken
