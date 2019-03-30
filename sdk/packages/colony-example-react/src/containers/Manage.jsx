import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Manage from '../components/Manage'

class ManageContainer extends Component {

  componentDidMount() {
    if (this.props.colonyClient === null) {
      this.props.history.push('/manage')
    }
  }

  render() {
    return <Manage colonyClient={this.props.colonyClient} />
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(withRouter(ManageContainer))
