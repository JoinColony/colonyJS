import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Manage/Funding/ClaimFunds'
import MoveFunds from '../../containers/Manage/Funding/MoveFunds'
import ViewPots from '../../containers/Manage/Funding/ViewPots'
import styles from './Funding.module.scss'

const Funds = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/funding">
        {'View Pots'}
      </NavLink>
      <NavLink to="/manage/funding/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/manage/funding/move">
        {'Move Funds'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/funding" component={ViewPots} />
      <Route exact path="/manage/funding/claim" component={ClaimFunds} />
      <Route exact path="/manage/funding/move" component={MoveFunds} />
    </Switch>
  </div>
)

export default Funds
