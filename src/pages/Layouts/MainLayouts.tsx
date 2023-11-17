import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import styles from './MainLayout.module.scss'
const MainLayouts: FC = () => {
  return (
    <>
      <div>MainLayout header</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayout footer</div>
    </>
  )
}
export default MainLayouts
