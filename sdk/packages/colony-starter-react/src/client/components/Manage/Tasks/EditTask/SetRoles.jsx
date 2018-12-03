import React from 'react'
import styles from './SetRoles.scss'

const SetRoles = ({
  canSetManagerRole,
  canSetEvaluatorRole,
  canSetWorkerRole,
  handleChange,
  setManagerRole,
  setEvaluatorRole,
  setWorkerRole,
  roles,
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
    </div>
    {setTaskRoleError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {setTaskRoleError}
        </span>
      </div>
    }
    {setTaskRoleLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {setTaskRoleSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SetRoles
