import React from 'react'
import styles from './SetRoles.scss'

const SetRoles = ({
  canRemoveEvaluatorRole,
  canRemoveWorkerRole,
  canSetManagerRole,
  canSetEvaluatorRole,
  canSetWorkerRole,
  handleChange,
  removeEvaluatorRole,
  removeWorkerRole,
  removeTaskRoleError,
  removeTaskRoleLoading,
  removeTaskRoleSuccess,
  roles,
  setManagerRole,
  setEvaluatorRole,
  setWorkerRole,
  setTaskRoleError,
  setTaskRoleLoading,
  setTaskRoleSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Set Roles'}</h2>
    <div className={styles.field}>
      <label htmlFor="manager">
        {'Manager:'}
      </label>
      <input
        id="manager"
        onChange={handleChange}
        placeholder={'0x0'}
        type="string"
        value={roles.manager.address}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetManagerRole() ? null : styles.disabled} onClick={setManagerRole}>
        {'Set Manager Role'}
      </button>
    </div>
    <div className={styles.field}>
      <label htmlFor="evaluator">
        {'Evaluator:'}
      </label>
      <input
        id="evaluator"
        onChange={handleChange}
        placeholder={'0x0'}
        type="string"
        value={roles.evaluator.address}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetEvaluatorRole() ? null : styles.disabled} onClick={setEvaluatorRole}>
        {'Set Evaluator Role'}
      </button>
      <button className={canRemoveEvaluatorRole() ? null : styles.disabled} onClick={removeEvaluatorRole}>
        {'Remove Evaluator Role'}
      </button>
    </div>
    <div className={styles.field}>
      <label htmlFor="worker">
        {'Worker:'}
      </label>
      <input
        id="worker"
        onChange={handleChange}
        placeholder={'0x0'}
        type="string"
        value={roles.worker.address}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetWorkerRole() ? null : styles.disabled} onClick={setWorkerRole}>
        {'Set Worker Role'}
      </button>
      <button className={canRemoveWorkerRole() ? null : styles.disabled} onClick={removeWorkerRole}>
        {'Remove Worker Role'}
      </button>
    </div>
    {(setTaskRoleError || removeTaskRoleError) &&
      <div className={styles.message}>
        <span className={styles.error}>
          {(setTaskRoleError || removeTaskRoleError)}
        </span>
      </div>
    }
    {(setTaskRoleLoading || removeTaskRoleLoading) &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {(setTaskRoleSuccess || removeTaskRoleSuccess) &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SetRoles
