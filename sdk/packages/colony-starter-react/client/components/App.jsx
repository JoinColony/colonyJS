import React from 'react'
import Accounts from '../containers/Accounts'
import styles from './App.scss'

const App = ({
  connectNetwork,
  connectNetworkError,
  connectNetworkLoading,
  connectNetworkSuccess,
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
    {networkClient && !connectNetworkLoading && !connectNetworkError &&
      <div className={styles.info}>
        <p>{`Account Address: ${networkClient._contract.signer.address}`}</p>
        <p>{`Network Address: ${networkClient._contract.address}`}</p>
      </div>
    }
    {!networkClient &&  !connectNetworkLoading && !connectNetworkError &&
      <Accounts
        connectNetwork={connectNetwork}
      />
    }
  </div>
)

export default App
