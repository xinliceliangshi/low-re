import React, { FC } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
const { Title } = Typography
import styles from './Logo.module.scss'
const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Space>
        <Title>
          <FormOutlined />
        </Title>
        <Title>小慕问卷</Title>
      </Space>
    </div>
  )
}
export default Logo
