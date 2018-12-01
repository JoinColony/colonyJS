import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createToken, createTokenSuccess } from '../../actions/tokenActions'
import CreateToken from '../../components/Create/CreateToken'

class CreateTokenContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { token: { name: '', symbol: '' } }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.createTokenSuccess && prevProps.createTokenSuccess !== this.props.createTokenSuccess) {
      this.setState({ token: { name: '', symbol: '' } })
    }
  }

  componentWillUnmount() {
    this.props.resetSuccess()
  }

  handleChange(event) {
    let token = this.state.token
    token[event.target.id] = event.target.value
    this.setState({ token })
  }

  handleClick() {
    this.props.createToken(this.props.networkClient, this.state.token.name, this.state.token.symbol)
  }

  render() {
    return (
      <CreateToken
        createTokenError={this.props.createTokenError}
        createTokenLoading={this.props.createTokenLoading}
        createTokenSuccess={this.props.createTokenSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        token={this.state.token}
        tokenAddress={this.props.tokenAddress}
      />
    )
  }

}

const mapStateToProps = state => ({
  createTokenError: state.token.createTokenError,
  createTokenLoading: state.token.createTokenLoading,
  createTokenSuccess: state.token.createTokenSuccess,
  networkClient: state.network.networkClient,
  tokenAddress: state.token.tokenAddress,
})

const mapDispatchToProps = dispatch => ({
  createToken(networkClient, name, symbol) {
    dispatch(createToken(networkClient, name, symbol))
  },
  resetSuccess() {
    dispatch(createTokenSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTokenContainer)
