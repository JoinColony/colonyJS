import React from 'react'
import DomainSelector from '../../../../containers/Manage/DomainSelector'
import SkillSelector from '../../../../containers/Manage/SkillSelector'
import styles from './SetDetails.scss'

const SetDetails = ({
  canSetDetails,
  handleChange,
  handleClick,
  setTaskDetailsError,
  setTaskDetailsLoading,
  setTaskDetailsSuccess,
  task,
}) => (
  <div className={styles.container}>
    <h2>{'Set Details'}</h2>
    <div>
      <div className={styles.form}>
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
      </div>
      <div className={styles.buttons}>
        <button className={canSetDetails() ? null : styles.disabled} onClick={handleClick}>
          {'Set Details'}
        </button>
      </div>
      {setTaskDetailsError &&
        <div className={styles.message}>
          <span className={styles.error}>
            {setTaskDetailsError}
          </span>
        </div>
      }
      {setTaskDetailsLoading &&
        <div className={styles.message}>
          <span>
            {'loading...'}
          </span>
        </div>
      }
      {setTaskDetailsSuccess &&
        <div className={styles.message}>
          <span>
            {'success'}
          </span>
        </div>
      }
    </div>
  </div>
)

export default SetDetails
