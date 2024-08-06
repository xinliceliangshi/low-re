import React, { FC } from 'react'
import { Button, message } from 'antd'
import { useRequest } from 'ahooks'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router/index'
import { UserOutlined } from '@ant-design/icons'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { getUserInfoService } from '../services/user'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const { data } = useRequest(getUserInfoService)

  const { username, nickname } = data || {}
  function logout() {
    message.success('退出成功')
    nav(LOGIN_PATHNAME)
  }
  const UserInfo = (
    <>
      <span style={{ color: 'pink' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        退出
      </Button>
    </>
  )
  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>
  return <>{username ? UserInfo : Login}</>
}
export default UserInfo
