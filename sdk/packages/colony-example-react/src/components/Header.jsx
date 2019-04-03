import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <NavLink className={styles.title} to="/">
      {'colony-starter-react'}
    </NavLink>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/create">
          {'Create'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage">
          {'Manage'}
        </NavLink>
      </li>
    </ul>
  </header>
)

export default Header
