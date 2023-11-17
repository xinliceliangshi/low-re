import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Space } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import styles from './MainLayout.module.scss'
import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>小慕问卷 &copy; 2023-present</Footer>
    </Layout>
  )
}
export default MainLayout
