import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
const { Title, Paragraph } = Typography
import { MANAGER_LIST_PATHNAME } from '../router'
import styles from './Home.module.scss'
const Home: FC = () => {
  const nav = useNavigate()
  // function clickHander() {
  //   nav({
  //     pathname: '/login',
  //     search: '?name=123',
  //   })
  // }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建文档 100 份,发布问卷90 份,收到答卷980 份</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGER_LIST_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home
