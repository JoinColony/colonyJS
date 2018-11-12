import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewDomains from '../../containers/Manage/Home/ViewDomains'
import ViewColony from '../../containers/Manage/Home/ViewColony'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage">
        {'View Colony'}
      </NavLink>
      <NavLink to="/manage/domains">
        {'View Domains'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage" component={ViewColony} />
      <Route exact path="/manage/domains" component={ViewDomains} />
    </Switch>
  </div>
)

export default Home
