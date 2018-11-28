import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewColony from '../../containers/Manage/Home/ViewColony'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage">
        {'View Colony'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage" component={ViewColony} />
    </Switch>
  </div>
)

export default Home
