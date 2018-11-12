import React from 'react'
import TaskForm from './TaskForm'
import styles from './CreateTask.scss'

const CreateTask = ({
  createTaskError,
  createTaskLoading,
  createTaskSuccess,
  handleChange,
  handleClick,
  task,
}) => (
  <div className={styles.container}>
    <h2>{'Create Task'}</h2>
    <TaskForm
      handleChange={handleChange}
      task={task}
    />
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Create Task'}
      </button>
    </div>
    {createTaskError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {createTaskError}
        </span>
      </div>
    }
    {createTaskLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
  </div>
)

export default CreateTask
