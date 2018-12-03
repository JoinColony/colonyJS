import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as colonyActions from '../../actions/colonyActions'
import * as domainActions from '../../actions/domainActions'
import * as fundingActions from '../../actions/fundingActions'
import * as taskActions from '../../actions/taskActions'
import * as tokenActions from '../../actions/tokenActions'
import Menu from '../../components/Manage/Menu'

class MenuContainer extends Component {

  constructor(props) {
    super(props)
    this.closeManager = this.closeManager.bind(this)
  }

  closeManager() {
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
    return <Menu closeManager={this.closeManager} />
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
    dispatch(domainActions.setStateDomains(domains))
  },
  setStatePots(pots) {
    dispatch(fundingActions.setStatePots(pots))
  },
  setStateTask(task) {
    dispatch(taskActions.setStateTask(task))
  },
  setStateTasks(tasks) {
    dispatch(taskActions.setStateTasks(tasks))
  },
  setStateToken(token) {
    dispatch(tokenActions.setStateToken(token))
  },
})

export default connect(null, mapDispatchToProps)(withRouter(MenuContainer))
