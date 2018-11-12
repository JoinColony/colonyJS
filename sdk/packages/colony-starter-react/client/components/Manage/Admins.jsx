import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import AddAdmin from '../../containers/Manage/Admins/AddAdmin'
import RemoveAdmin from '../../containers/Manage/Admins/RemoveAdmin'
import ViewAdmins from '../../containers/Manage/Admins/ViewAdmins'
import styles from './Admins.scss'

const Admins = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/admins">
        {'View Admins'}
      </NavLink>
      <NavLink to="/manage/admins/add">
        {'Add Admin'}
      </NavLink>
      <NavLink to="/manage/admins/remove">
        {'Remove Admin'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/admins" component={ViewAdmins} />
      <Route exact path="/manage/admins/add" component={AddAdmin} />
      <Route exact path="/manage/admins/remove" component={RemoveAdmin} />
    </Switch>
  </div>
)

export default Admins
