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
          <li key={task.id} className={styles.item}>
            <TaskPreview task={task} />
            <div className={styles.buttons}>
              <button onClick={() => viewTask(task.id)}>
                {'View Task'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewTasks
