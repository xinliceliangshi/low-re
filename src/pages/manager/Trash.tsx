import React, { FC, useState } from 'react'
import { Typography, Empty, Table, Tag, Button } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
const { Title } = Typography
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
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
  useTitle('回收站')
  const [qestionList, setQestionList] = useState(rowQuestion)
  const tableColumns = [
    {
      title: '问卷标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data

  const TableElem = (
    <>
      <div>
        <Button>恢复</Button>
      </div>
    </>
  )
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
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && <Table columns={tableColumns} dataSource={list} rowKey="_id" />}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}
export default Trash
