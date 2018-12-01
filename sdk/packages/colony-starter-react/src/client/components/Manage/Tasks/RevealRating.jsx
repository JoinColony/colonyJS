import React from 'react'
import styles from './RevealRating.scss'

const RevealRating = ({
  handleChange,
  handleClick,
  rating,
  revealRatingError,
  revealRatingLoading,
  revealRatingSuccess,
  role,
}) => (
  <div className={styles.container}>
    <h2>{'Reveal Rating'}</h2>
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
        <option value={10}>
          {'10'}
        </option>
        <option value={20}>
          {'20'}
        </option>
        <option value={30}>
          {'30'}
        </option>
      </select>
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Reveal Rating'}
      </button>
    </div>
    {revealRatingError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {revealRatingError}
        </span>
      </div>
    }
    {revealRatingLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {revealRatingSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default RevealRating
