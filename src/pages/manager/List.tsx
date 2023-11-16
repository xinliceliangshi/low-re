import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import QuestionCard from '../../components/QesionCard'
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
const List: FC = () => {
  const [qestionList, setQestionList] = useState(rowQuestion)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>
      <div className={styles.content}>
        {qestionList.map(q => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
      </div>
      <div className={styles.footer}>底部</div>
    </>
  )
}
export default List
