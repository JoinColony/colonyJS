import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdmins } from '../../../actions/adminsActions'
import ViewAdmins from '../../../components/Manage/Admins/ViewAdmins'

class ViewAdminsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.admins === null) {
      this.props.getAdmins(this.props.colonyClient)
    }
  }

  componentDidUpdate() {
    if (this.props.admins === null && !this.props.getAdminsLoading) {
      this.props.getAdmins(this.props.colonyClient)
    }
  }

  render() {
    return (
      <ViewAdmins
        admins={this.props.admins}
        getAdminsError={this.props.getAdminsError}
        getAdminsLoading={this.props.getAdminsLoading}
        getAdminsSuccess={this.props.getAdminsSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  admins: state.admins.admins,
  colonyClient: state.colony.colonyClient,
  getAdminsError: state.admins.getAdminsError,
  getAdminsLoading: state.admins.getAdminsLoading,
  getAdminsSuccess: state.admins.getAdminsSuccess,
})

const mapDispatchToProps = dispatch => ({
  getAdmins(colonyClient) {
    dispatch(getAdmins(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAdminsContainer)
