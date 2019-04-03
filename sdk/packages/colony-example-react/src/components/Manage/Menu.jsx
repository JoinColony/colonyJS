import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

const Menu = ({ closeManager }) => (
  <div className={styles.menu}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink href="/manage" to="/manage">
          {'Home'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink href="/manage/token" to="/manage/token">
          {'Token'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink href="/manage/admins" to="/manage/admins">
          {'Admins'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink href="/manage/funding" to="/manage/funding">
          {'Funding'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink href="/manage/domains" to="/manage/domains">
          {'Domains'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink href="/manage/tasks" to="/manage/tasks">
          {'Tasks'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <button onClick={closeManager}>
          {'Close'}
        </button>
      </li>
    </ul>
  </div>
)

export default Menu
