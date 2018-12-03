import React from 'react'
import SetDetails from '../../../containers/Manage/Tasks/EditTask/SetDetails'
import SetPayout from '../../../containers/Manage/Tasks/EditTask/SetPayout'
import SetRole from '../../../containers/Manage/Tasks/EditTask/SetRole'
import SignTask from '../../../containers/Manage/Tasks/EditTask/SignTask'
import styles from './EditTask.scss'

const EditTask = ({
  getTaskError,
  getTaskLoading,
  getTaskSuccess,
  task,
}) => (
  <div>
    <SetDetails />
    <SetPayout />
    <SetRole />
    <SignTask />
  </div>
)

export default EditTask
