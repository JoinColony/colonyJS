import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './Create'
import Manage from '../containers/Manage'
import Footer from './Footer'
import Header from './Header'
import Home from '../containers/Home'
import styles from './App.module.scss'

const App = ({
  error,
  loading,
  success,
}) => (
  <div className={styles.container}>
    {loading &&
      <div className={styles.message}>
        {'Connecting to Colony Network...'}
      </div>
    }
    {error &&
      <div className={styles.message}>
        {error}
      </div>
    }
    {success && !loading && !error &&
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
  </div>
)

export default App
