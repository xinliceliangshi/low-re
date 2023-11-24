import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGER_LIST_PATHNAME } from '../router'
const NotFound: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      {' '}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => nav(MANAGER_LIST_PATHNAME)}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}
export default NotFound
