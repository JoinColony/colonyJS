import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as networkActions from '../../actions/networkActions'
import SkillSelector from '../../components/Manage/SkillSelector'

class SkillSelectorContainer extends Component {

  componentDidMount() {
    if (this.props.skills === null) {
      this.props.getSkills(this.props.networkClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <SkillSelector
        getSkillsError={this.props.getSkillsError}
        getSkillsLoading={this.props.getSkillsLoading}
        getSkillsSuccess={this.props.getSkillsSuccess}
        handleChange={this.props.handleChange}
        skillId={this.props.skillId}
        skills={this.props.skills}
      />
    )
  }

}

const mapStateToProps = state => ({
  getSkillsError: state.task.getSkillsError,
  getSkillsLoading: state.task.getSkillsLoading,
  getSkillsSuccess: state.task.getSkillsSuccess,
  networkClient: state.network.networkClient,
  skills: state.network.skills,
})

const mapDispatchToProps = dispatch => ({
  getSkills(networkClient) {
    dispatch(networkActions.getSkills(networkClient))
  },
  resetActions() {
    dispatch(networkActions.getSkillsError(null))
    dispatch(networkActions.getSkillsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillSelectorContainer)
