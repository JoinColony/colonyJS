import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Accounts from '../containers/Accounts'
import Create from './Create'
import Manage from '../containers/Manage'
import Footer from './Footer'
import Header from './Header'
import Home from '../containers/Home'
import styles from './App.scss'

const App = ({
  connectNetwork,
  connectNetworkError,
  connectNetworkLoading,
  connectNetworkSuccess,
  networkClient,
}) => (
  <div className={styles.container}>
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
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route path="/manage" component={Manage} />
        </Switch>
        <Footer />
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
