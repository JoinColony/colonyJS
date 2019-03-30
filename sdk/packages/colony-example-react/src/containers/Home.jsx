import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class HomeContainer extends Component {

  render() {
    return <Home networkClient={this.props.networkClient} />
  }

}

const mapStateToProps = state => ({
  networkClient: state.network.networkClient,
})

export default connect(mapStateToProps, null)(HomeContainer)
