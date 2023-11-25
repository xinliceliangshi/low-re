import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QesionCard'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'
import { useSearchParams } from 'react-router-dom'
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
const { Title } = Typography
const List: FC = () => {
  useTitle('我的问卷')
  const [searchParams] = useSearchParams()
  const [qestionList, setQestionList] = useState(rowQuestion)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {qestionList.length > 0 &&
          qestionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>loadMore... 上划加载更多...</div>
    </>
  )
}
export default List
