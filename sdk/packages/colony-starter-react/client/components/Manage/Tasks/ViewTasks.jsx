import React from 'react'
import TaskActions from '../../../containers/Manage/Tasks/TaskActions'
import TaskPreview from './TaskPreview'
import styles from './ViewTasks.scss'

const ViewTasks = ({
  getTasksError,
  getTasksLoading,
  getTasksSuccess,
  tasks,
}) => (
  <div className={styles.container}>
    <h2>{'View Tasks'}</h2>
    {!tasks || getTasksLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={styles.item}>
            <TaskPreview task={task} />
            <TaskActions task={task} />
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewTasks
