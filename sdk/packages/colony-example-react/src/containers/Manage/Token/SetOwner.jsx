import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tokenActions from '../../../actions/tokenActions'
import SetOwner from '../../../components/Manage/Token/SetOwner'

class SetOwnerContainer extends Component {

  constructor(props) {
    super(props)
    this.canSetOwner = this.canSetOwner.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetOwner() {
    const tokenOwner = this.props.token.owner.toLowerCase()
    const walletAddress = this.props.colonyClient.adapter.wallet.address.toLowerCase()
    return tokenOwner === walletAddress
  }

  handleClick() {
    this.props.setTokenOwner(this.props.colonyClient)
  }

  render() {
    return (
      <SetOwner
        canSetOwner={this.canSetOwner}
        handleClick={this.handleClick}
        setTokenOwnerError={this.props.setTokenOwnerError}
        setTokenOwnerLoading={this.props.setTokenOwnerLoading}
        setTokenOwnerSuccess={this.props.setTokenOwnerSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  setTokenOwnerError: state.token.setTokenOwnerError,
  setTokenOwnerLoading: state.token.setTokenOwnerLoading,
  setTokenOwnerSuccess: state.token.setTokenOwnerSuccess,
  token: state.token.token,
})

const mapDispatchToProps = dispatch => ({
  resetActions() {
    dispatch(tokenActions.setTokenOwnerError(null))
    dispatch(tokenActions.setTokenOwnerSuccess(false))
  },
  setTokenOwner(colonyClient) {
    dispatch(tokenActions.setTokenOwner(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetOwnerContainer)
