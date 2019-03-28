import React from 'react'
import styles from './TaskPreview.scss'

const TaskPreview = ({ task }) => (
  <div className={styles.container}>
    <p>{'ID: ' + task.id}</p>
    <p>{'Domain ID: ' + task.domainId}</p>
    <p>{'Skill ID: ' + task.skillId}</p>
    <p>{'Status: ' + task.status}</p>
    <p>{'Due Date: ' + task.dueDate}</p>
    <p>{'Title: ' + task.specification.title}</p>
    <p>{'Description: ' + task.specification.description}</p>
    <p>{'Date Completed: ' + task.completionDate}</p>
    <p>{'Payouts We Cannot Make: ' + task.payoutsWeCannotMake}</p>
  </div>
)

export default TaskPreview
