import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManagerLayout.module.scss'
const ManagerLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManagerLayout left</p>
        <button>创建问卷</button>
        <br />
        <a href="#">我的问卷</a>
        <br />
        <a href="#">创建问卷</a>
        <a href="#">回收站</a>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManagerLayout
