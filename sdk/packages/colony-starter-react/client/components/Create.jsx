import React from 'react'
import CreateColony from '../containers/Create/CreateColony'
import CreateToken from '../containers/Create/CreateToken'
import styles from './Create.scss'

const Create = () => (
  <div className={styles.container}>
    <CreateToken />
    <CreateColony />
  </div>
)

export default Create
