import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from 'antd'
const Home: FC = () => {
  const nav = useNavigate()
  function clickHander() {
    nav({
      pathname: '/login',
      search: '?name=123',
    })
  }
  return (
    <div>
      <p>Home</p>
      <Button onClick={clickHander}>登录</Button>&nbsp;
      <Link to="/register">注册</Link>
    </div>
  )
}
export default Home
