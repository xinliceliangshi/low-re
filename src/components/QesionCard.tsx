import React, { FC, useState } from 'react'
import { Button, Space, Divider, Tag, Modal, message } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { duplicateQuestionService, updateQuestionService } from '../services/question'
import {
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'
import styles from './QesionCard.module.scss'
import { useRequest } from 'ahooks'
type PropType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt?: string
  updatedAt?: Date
}
const QuestionCard: FC<PropType> = (props: PropType) => {
  const nav = useNavigate()
  const { confirm } = Modal
  const { _id, title, isPublished, isStar, answerCount, createdAt, updatedAt } = props
  function duplicate() {
    confirm({
      title: '确认复制问卷？',
      icon: <CopyOutlined />,
      onOk: () => {
        changeduplicate()
      },
    })
  }
  const [isDeleteState, setIsDeleteState] = useState(false)
  const { loading: deleteloading, run: deleteQuestion } = useRequest(
    async () => await updateQuestionService(_id, { isDeleted: true }),
    {
      manual: true,
      onSuccess: () => {
        message.success('操作成功')
        setIsDeleteState(true)
      },
    }
  )
  function remove() {
    // console.log('remove')
    confirm({
      title: '确认删除问卷？',
      icon: <DeleteOutlined />,
      onOk: deleteQuestion,
    })
  }

  const [isStrState, setIsStrState] = useState(isStar)
  const { loading: changeStarloading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(_id, { isStar: !isStrState })
    },
    {
      manual: true,
      onSuccess: () => {
        setIsStrState(!isStrState)
        message.success('操作成功')
      },
    }
  )
  const { loading: duplicateloading, run: changeduplicate } = useRequest(
    async () => await duplicateQuestionService(_id),
    {
      manual: true,
      onSuccess: (res: any) => {
        message.success('操作成功')
        nav(`/question/edit/${res.id}`)
      },
    }
  )
  if (isDeleteState) {
    return null
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
          &nbsp;
          <span>答卷：{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <Divider style={{ margin: '12px' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              icon={<EditOutlined />}
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              icon={<LineChartOutlined />}
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              type="text"
              icon={<StarOutlined />}
              size="small"
              onClick={changeStar}
              disabled={changeStarloading}
            >
              {isStrState ? '取消星标' : '星标'}
            </Button>
            <Button type="text" icon={<DeleteOutlined />} size="small" onClick={duplicate}>
              复制
            </Button>
            <Button type="text" icon={<DeleteOutlined />} size="small" onClick={remove}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default QuestionCard
