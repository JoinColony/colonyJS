import React from 'react'
import styles from './TaskActions.scss'

const TaskActions = ({
  cancelTask,
  claimPayout,
  editTask,
  error,
  finalizeTask,
  loading,
  revealRating,
  signTask,
  submitRating,
  submitWork,
  success,
  viewTask,
}) => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <button onClick={viewTask}>
        {'View Task'}
      </button>
      <button onClick={editTask}>
        {'Edit Task'}
      </button>
      <button onClick={signTask}>
        {'Sign Task'}
      </button>
      <button onClick={submitWork}>
        {'Submit Work'}
      </button>
      <button onClick={submitRating}>
        {'Submit Rating'}
      </button>
      <button onClick={revealRating}>
        {'Reveal Rating'}
      </button>
      <button onClick={finalizeTask}>
        {'Finalize Task'}
      </button>
      {/*

        // TODO: Add the following back in once colonyJS#314 is included

        <button onClick={cancelTask}>
          {'Cancel Task'}
        </button>

      */}
      <button onClick={claimPayout}>
        {'Claim Payout'}
      </button>
    </div>
    {error && !loading &&
      <div className={styles.message}>
        <span className={styles.error}>
          {error}
        </span>
      </div>
    }
    {loading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {!error && !loading && success &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default TaskActions
