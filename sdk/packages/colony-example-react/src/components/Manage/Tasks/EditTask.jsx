import React from 'react'
import SetDetails from '../../../containers/Manage/Tasks/EditTask/SetDetails'
import SetPayouts from '../../../containers/Manage/Tasks/EditTask/SetPayouts'
import SetRoles from '../../../containers/Manage/Tasks/EditTask/SetRoles'
import SignTask from '../../../containers/Manage/Tasks/EditTask/SignTask'

const EditTask = ({
  getTaskError,
  getTaskLoading,
  getTaskSuccess,
  task,
}) => (
  <div>
    <SignTask />
    <SetDetails />
    <SetPayouts />
    <SetRoles />
  </div>
)

export default EditTask
