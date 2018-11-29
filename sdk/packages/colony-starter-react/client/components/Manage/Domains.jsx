import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import AddDomain from '../../containers/Manage/Domains/AddDomain'
import ViewDomains from '../../containers/Manage/Domains/ViewDomains'
import styles from './Domains.scss'

const Domains = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/domains">
        {'View Domains'}
      </NavLink>
      <NavLink to="/manage/domains/add">
        {'Add Domain'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/domains/add" component={AddDomain} />
      <Route exact path="/manage/domains" component={ViewDomains} />
    </Switch>
  </div>
)

export default Domains
