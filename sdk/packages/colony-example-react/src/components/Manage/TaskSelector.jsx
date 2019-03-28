import React from 'react'
import styles from './TaskSelector.module.scss'

const TaskSelector = ({ handleChange, taskId, tasks }) => (
  <div className={styles.field}>
    <label htmlFor="taskId">
      {'Task:'}
    </label>
    <select id="taskId" onChange={handleChange} value={taskId}>
      <option value={0}>
        {'select task...'}
      </option>
      {tasks ? tasks.map(task => (
        <option key={task.id} value={task.id}>
          {task.id}
        </option>
      )) : (
        <option value={null}>
          {'loading...'}
        </option>
      )}
    </select>
  </div>
)

export default TaskSelector
