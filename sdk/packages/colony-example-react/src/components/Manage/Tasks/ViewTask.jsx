import React from 'react'
import TaskActions from '../../../containers/Manage/Tasks/TaskActions'
import TaskExtended from './TaskExtended'
import styles from './ViewTask.module.scss'

const ViewTask = ({
  getTaskError,
  getTaskLoading,
  getTaskSuccess,
  task,
}) => (
  <div className={styles.container}>
    <h2>{'View Task'}</h2>
    {!task || getTaskLoading ?
      <div>{'loading...'}</div>
    :
      <div>
        <TaskExtended task={task} />
        <TaskActions task={task} />
      </div>
    }
  </div>
)

export default ViewTask
