import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.scss'

const Menu = ({ exit }) => (
  <div className={styles.menu}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/manage">
          {'Home'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage/admins">
          {'Admins'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage/domains">
          {'Domains'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage/funding">
          {'Funding'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage/tasks">
          {'Tasks'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage/token">
          {'Token'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <a onClick={exit}>
          {'Exit'}
        </a>
      </li>
    </ul>
  </div>
)

export default Menu
