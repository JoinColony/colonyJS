import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mintTokens } from '../../../actions/tokenActions'
import MintTokens from '../../../components/Manage/Token/MintTokens'

class MintTokensContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { amount: 0 }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.mintTokensSuccess && prevProps.mintTokensSuccess !== this.props.mintTokensSuccess) {
      this.setState({ amount: 0 })
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.mintTokens(this.props.colonyClient, this.state.amount)
  }

  render() {
    return (
      <MintTokens
        amount={this.state.amount}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        mintTokensError={this.props.mintTokensError}
        mintTokensLoading={this.props.mintTokensLoading}
        mintTokensSuccess={this.props.mintTokensSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  mintTokensError: state.token.mintTokensError,
  mintTokensLoading: state.token.mintTokensLoading,
  mintTokensSuccess: state.token.mintTokensSuccess,
})

const mapDispatchToProps = dispatch => ({
  mintTokens(colonyClient, amount) {
    dispatch(mintTokens(colonyClient, amount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MintTokensContainer)
