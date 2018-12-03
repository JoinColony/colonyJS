import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fundingActions from '../../../actions/fundingActions'
import ViewPots from '../../../components/Manage/Funding/ViewPots'

class ViewPotsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.pots === null) {
      this.props.getPots(this.props.colonyClient)
    }
  }

  componentDidUpdate() {
    if (this.props.pots === null && !this.props.getPotsLoading) {
      this.props.getPots(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <ViewPots
        getPotsError={this.props.getPotsError}
        getPotsLoading={this.props.getPotsLoading}
        getPotsSuccess={this.props.getPotsSuccess}
        pots={this.props.pots}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getPotsError: state.funding.getPotsError,
  getPotsLoading: state.funding.getPotsLoading,
  getPotsSuccess: state.funding.getPotsSuccess,
  pots: state.funding.pots,
})

const mapDispatchToProps = dispatch => ({
  getPots(colonyClient) {
    dispatch(fundingActions.getPots(colonyClient))
  },
  resetActions() {
    dispatch(fundingActions.getPotsError(null))
    dispatch(fundingActions.getPotsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPotsContainer)
