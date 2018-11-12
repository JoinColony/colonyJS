import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Manage/Funds/ClaimFunds'
import FundDomain from '../../containers/Manage/Funds/FundDomain'
import FundTask from '../../containers/Manage/Funds/FundTask'
import ViewFunds from '../../containers/Manage/Funds/ViewFunds'
import styles from './Funds.scss'

const Funds = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/funds">
        {'View Funds'}
      </NavLink>
      <NavLink to="/manage/funds/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/manage/funds/domain">
        {'Fund Domain'}
      </NavLink>
      <NavLink to="/manage/funds/task">
        {'Fund Task'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/funds" component={ViewFunds} />
      <Route exact path="/manage/funds/claim" component={ClaimFunds} />
      <Route exact path="/manage/funds/domain" component={FundDomain} />
      <Route exact path="/manage/funds/task" component={FundTask} />
    </Switch>
  </div>
)

export default Funds
