import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Manage/Funding/ClaimFunds'
import FundDomain from '../../containers/Manage/Funding/FundDomain'
import FundTask from '../../containers/Manage/Funding/FundTask'
import ViewPots from '../../containers/Manage/Funding/ViewPots'
import styles from './Funding.scss'

const Funds = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/funding">
        {'View Pots'}
      </NavLink>
      <NavLink to="/manage/funding/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/manage/funding/domain">
        {'Fund Domain'}
      </NavLink>
      <NavLink to="/manage/funding/task">
        {'Fund Task'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/funding" component={ViewPots} />
      <Route exact path="/manage/funding/claim" component={ClaimFunds} />
      <Route exact path="/manage/funding/domain" component={FundDomain} />
      <Route exact path="/manage/funding/task" component={FundTask} />
    </Switch>
  </div>
)

export default Funds
