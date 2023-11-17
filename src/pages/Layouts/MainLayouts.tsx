import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
const MainLayouts: FC = () => {
  return (
    <>
      <div className={styles.container}>MainLayout header</div>
      <div className={styles.left}>
        <Outlet />
      </div>
      <div className={styles.right}>MainLayout footer</div>
    </>
  )
}
export default MainLayouts
