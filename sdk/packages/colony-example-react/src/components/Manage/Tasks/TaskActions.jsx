import React from 'react'
import styles from './TaskActions.module.scss'

const TaskActions = ({
  cancelTask,
  canCancelTask,
  canClaimPayout,
  canEditTask,
  canFinalizeTask,
  canRevealRating,
  canSubmitWork,
  canSubmitRating,
  claimPayout,
  editTask,
  error,
  finalizeTask,
  loading,
  revealRating,
  submitRating,
  submitWork,
  success,
}) => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={canEditTask() ? null : styles.disabled} onClick={editTask}>
        {'Edit Task'}
      </button>
      <button className={canSubmitWork() ? null : styles.disabled} onClick={submitWork}>
        {'Submit Work'}
      </button>
      <button className={canSubmitRating() ? null : styles.disabled} onClick={submitRating}>
        {'Submit Rating'}
      </button>
      <button className={canRevealRating() ? null : styles.disabled} onClick={revealRating}>
        {'Reveal Rating'}
      </button>
      <button className={canFinalizeTask() ? null : styles.disabled} onClick={finalizeTask}>
        {'Finalize Task'}
      </button>
      <button className={canCancelTask() ? null : styles.disabled} onClick={cancelTask}>
        {'Cancel Task'}
      </button>
      <button className={canClaimPayout() ? null : styles.disabled} onClick={claimPayout}>
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
