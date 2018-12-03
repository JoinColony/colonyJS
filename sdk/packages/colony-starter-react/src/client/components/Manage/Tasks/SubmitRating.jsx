import React from 'react'
import styles from './SubmitRating.scss'

const SubmitRating = ({
  handleChange,
  handleClick,
  rating,
  role,
  submitRatingError,
  submitRatingLoading,
  submitRatingSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Submit Rating'}</h2>
    <div className={styles.field}>
      <label htmlFor="role">
        {'role:'}
      </label>
      <select id="role" value={role} onChange={handleChange}>
        <option value={'MANAGER'}>
          {'Manager'}
        </option>
        <option value={'WORKER'}>
          {'Worker'}
        </option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="rating">
        {'rating:'}
      </label>
      <select id="rating" value={rating} onChange={handleChange}>
        <option value={1}>
          {'1'}
        </option>
        <option value={2}>
          {'2'}
        </option>
        <option value={3}>
          {'3'}
        </option>
      </select>
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Submit Rating'}
      </button>
    </div>
    {submitRatingError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {submitRatingError}
        </span>
      </div>
    }
    {submitRatingLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {submitRatingSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SubmitRating
