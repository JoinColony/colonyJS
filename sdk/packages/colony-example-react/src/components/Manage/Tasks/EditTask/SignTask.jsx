import React from 'react'
import styles from './SignTask.module.scss'

const SignTask = ({
  canSignTask,
  handleClick,
  multisigOperations,
  signTaskError,
  signTaskLoading,
  signTaskSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Sign Task'}</h2>
    <div>
      {multisigOperations && multisigOperations.length ?
        multisigOperations.map((operation, index) => (
          <div key={index} className={styles.operations}>
            <p>{'Operation: ' + operation.sender.functionName}</p>
            <p>{'Missing Signees: ' + operation.missingSignees}</p>
            <p>{'Required Signees: ' + operation.requiredSignees}</p>
            <p>{'Input Values: ' + JSON.stringify(operation.payload.inputValues)}</p>
          </div>
        ))
      :
        <div className={styles.operations}>
          <p>{'No pending operations for this account'}</p>
        </div>
      }
    </div>
    <div className={styles.buttons}>
      <button className={canSignTask() ? null : styles.disabled} onClick={handleClick}>
        {'Sign Task'}
      </button>
    </div>
    {signTaskError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {signTaskError}
        </span>
      </div>
    }
    {signTaskLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {signTaskSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SignTask
