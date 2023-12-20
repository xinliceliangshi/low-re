import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../services/question'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: '#fff', minHeight: '40px' }}>header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ minHeight: '900px' }}>画布，滚动测试</div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}
export default Edit
