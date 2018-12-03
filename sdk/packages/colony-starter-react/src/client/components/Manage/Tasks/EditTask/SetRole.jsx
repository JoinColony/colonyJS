import React from 'react'
import styles from './SetRole.scss'

const SetRole = ({
  canSetRole,
  handleChange,
  handleClick,
  role,
  roles,
  setTaskRoleError,
  setTaskRoleLoading,
  setTaskRoleSuccess,
  user,
}) => (
  <div className={styles.container}>
    <h2>{'Set Role'}</h2>
    <div>
      <p>{'Manager:' + roles.manager.address}</p>
      <p>{'Evaluator:' + roles.evaluator.address}</p>
      <p>{'Worker:' + roles.worker.address}</p>
    </div>
    <div className={styles.field}>
      <label htmlFor="role">
        {'role:'}
      </label>
      <select id="role" value={role} onChange={handleChange}>
        <option value={'MANAGER'}>
          {'Manager'}
        </option>
        <option value={'EVALUATOR'}>
          {'Evaluator'}
        </option>
        <option value={'WORKER'}>
          {'Worker'}
        </option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="user">
        {'user:'}
      </label>
      <input
        id="user"
        onChange={handleChange}
        placeholder={'0x0'}
        type="string"
        value={user}
      />
    </div>
    <div className={styles.buttons}>
      <button className={canSetRole() ? null : styles.disabled} onClick={handleClick}>
        {'Set Role'}
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

export default SetRole
