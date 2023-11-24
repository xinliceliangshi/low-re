import React, { FC } from 'react'
import { Typography, Empty } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
const { Title } = Typography
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
const Trash: FC = () => {
  return <div>Trash</div>
}
export default Trash
