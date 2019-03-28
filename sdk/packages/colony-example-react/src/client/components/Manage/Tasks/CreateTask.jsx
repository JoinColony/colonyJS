import React from 'react'
import DomainSelector from '../../../containers/Manage/DomainSelector'
import SkillSelector from '../../../containers/Manage/SkillSelector'
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
    <DomainSelector
      handleChange={handleChange}
      domainId={task.domainId}
      slice={0}
    />
    <SkillSelector
      handleChange={handleChange}
      skillId={task.skillId}
    />
    <div className={styles.field}>
      <label htmlFor="specification-title">
        {'Title:'}
      </label>
      <input
        id="specification-title"
        onChange={handleChange}
        placeholder="task title"
        type="text"
        value={task.specification.title}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="specification-description">
        {'Description:'}
      </label>
      <input
        id="specification-description"
        onChange={handleChange}
        placeholder="task description"
        type="text"
        value={task.specification.description}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="dueDate">
        {'Due date:'}
      </label>
      <input
        id="dueDate"
        onChange={handleChange}
        type="date"
        value={task.dueDate}
      />
    </div>
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
