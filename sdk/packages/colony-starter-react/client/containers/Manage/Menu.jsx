import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as colonyActions from '../../actions/colonyActions'
import * as domainsActions from '../../actions/domainsActions'
import * as fundingActions from '../../actions/fundingActions'
import * as tasksActions from '../../actions/tasksActions'
import * as tokenActions from '../../actions/tokenActions'
import Menu from '../../components/Manage/Menu'

class MenuContainer extends Component {

  constructor(props) {
    super(props)
    this.exit = this.exit.bind(this)
  }

  exit() {
    this.props.history.push('/manage')
    this.props.setStateColonyClient(null)
    this.props.setStateClaimableFunds(null)
    this.props.setStateDomains(null)
    this.props.setStatePots(null)
    this.props.setStateTask(null)
    this.props.setStateTasks(null)
    this.props.setStateToken(null)
  }

  render() {
    return <Menu exit={this.exit} />
  }

}

const mapDispatchToProps = dispatch => ({
  setStateColonyClient(colonyClient) {
    dispatch(colonyActions.setStateColonyClient(colonyClient))
  },
  setStateClaimableFunds(claimableFunds) {
    dispatch(fundingActions.setStateClaimableFunds(claimableFunds))
  },
  setStateDomains(domains) {
    dispatch(domainsActions.setStateDomains(domains))
  },
  setStatePots(pots) {
    dispatch(fundingActions.setStatePots(pots))
  },
  setStateTask(task) {
    dispatch(tasksActions.setStateTask(task))
  },
  setStateTasks(tasks) {
    dispatch(tasksActions.setStateTasks(tasks))
  },
  setStateToken(token) {
    dispatch(tokenActions.setStateToken(token))
  },
})

export default connect(null, mapDispatchToProps)(withRouter(MenuContainer))
