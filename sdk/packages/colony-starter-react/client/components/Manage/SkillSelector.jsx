import React from 'react'
import styles from './SkillSelector.scss'

const SkillSelector = ({ handleChange, skillId, skills }) => (
  <div className={styles.field}>
    <label htmlFor="skillId">
      {'Skill:'}
    </label>
    <select id="skillId" onChange={handleChange} value={skillId}>
      <option value={0}>
        {'select skill...'}
      </option>
      {skills ? skills.map(skill => (
        <option key={skill.id} value={skill.id}>
          {skill.id}
        </option>
      )) : (
        <option value={null}>
          {'loading...'}
        </option>
      )}
    </select>
  </div>
)

export default SkillSelector
