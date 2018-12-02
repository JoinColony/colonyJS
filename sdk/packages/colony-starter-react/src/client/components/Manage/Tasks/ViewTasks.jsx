import React from 'react'
import TaskPreview from './TaskPreview'
import styles from './ViewTasks.scss'

const ViewTasks = ({
  getTasksError,
  getTasksLoading,
  getTasksSuccess,
  tasks,
  viewTask,
}) => (
  <div className={styles.container}>
    <h2>{'View Tasks'}</h2>
    {!tasks || getTasksLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={styles.item} onClick={() => viewTask(task.id)}>
            <TaskPreview task={task} />
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewTasks
