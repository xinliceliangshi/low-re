import React, { FC, useState } from 'react'
import { Typography, Empty } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { useSearchParams } from 'react-router-dom'
import QuestionCard from '../../components/QesionCard'
const { Title } = Typography
import ListSearch from '../../components/ListSearch'
// import { useSearchParams } from 'react-router-dom'
const rowQuestion = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 0,
    createdAt: '2020-11-01',
    updatedAt: new Date(),
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: '2020-11-01',
    updatedAt: new Date(),
  },
]
const Star: FC = () => {
  useTitle('我的收藏')
  const [qestionList, setQestionList] = useState(rowQuestion)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {qestionList.length === 0 && <Empty description="暂无数据" />}
        {qestionList.length > 0 &&
          qestionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}
export default Star
