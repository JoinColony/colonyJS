import React from 'react'
import styles from './TaskExtended.module.scss'

const TaskExtended = ({ task }) => (
  <div className={styles.container}>
    <p>{'ID: ' + task.id}</p>
    <p>{'Domain ID: ' + task.domainId}</p>
    <p>{'Skill ID: ' + task.skillId}</p>
    <p>{'Status: ' + task.status}</p>
    <p>{'Due Date: ' + task.dueDate}</p>
    <p>{'Title: ' + task.specification.title}</p>
    <p>{'Description: ' + task.specification.description}</p>
    <p>{'Manager: ' + task.roles.manager.address}</p>
    <p>{'Evaluator: ' + task.roles.evaluator.address}</p>
    <p>{'Worker: ' + task.roles.worker.address}</p>
    <p>{'Pot Balance: ' + task.pot.balance}</p>
    <p>{'Manager Payout: ' + task.payouts.manager}</p>
    <p>{'Evaluator Payout: ' + task.payouts.evaluator}</p>
    <p>{'Worker Payout: ' + task.payouts.worker}</p>
    <p>{'Date Completed: ' + task.completionDate}</p>
    <p>{'Delivered Message: ' + task.deliverable.message}</p>
    <p>{'Ratings Submitted: ' + task.ratings.count}</p>
    <p>{'Last Rating Submitted: ' + task.ratings.date}</p>
    <p>{'Payouts We Cannot Make: ' + task.payoutsWeCannotMake}</p>
  </div>
)

export default TaskExtended
