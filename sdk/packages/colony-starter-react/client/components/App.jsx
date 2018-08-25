import React from 'react'
import styles from './App.scss'

const App = ({
  connectNetworkError,
  connectNetworkLoading,
  networkClient,
}) => (
  <div>
    <h1 className={styles.title}>
      {'colony-starter-react'}
    </h1>
    {connectNetworkLoading &&
      <div className={styles.message}>
        {'connecting to colonyNetwork...'}
      </div>
    }
    {connectNetworkError &&
      <div className={styles.message}>
        {connectNetworkError}
      </div>
    }
    {!connectNetworkLoading && !connectNetworkError &&
      <div className={styles.message}>
        {`Network Address: ${networkClient._contract.address}`}
      </div>
    }
  </div>
)

export default App
