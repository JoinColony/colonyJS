import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSkills, getSkillsSuccess } from '../../actions/skillsActions'
import SkillSelector from '../../components/Manage/SkillSelector'

class SkillSelectorContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.skills === null) {
      this.props.getSkills(this.props.networkClient)
    }
  }

  componentWillUnmount() {
    this.props.resetSuccess()
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
  getSkillsError: state.tasks.getSkillsError,
  getSkillsLoading: state.tasks.getSkillsLoading,
  getSkillsSuccess: state.tasks.getSkillsSuccess,
  networkClient: state.network.networkClient,
  skills: state.skills.skills,
})

const mapDispatchToProps = dispatch => ({
  getSkills(networkClient) {
    dispatch(getSkills(networkClient))
  },
  resetSuccess() {
    dispatch(getSkillsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillSelectorContainer)
