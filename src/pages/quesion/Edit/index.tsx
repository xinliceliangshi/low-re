import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../services/question'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: '#fff' }}>header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas />
              {/* <div className={styles['canvas-wrapper-content']}>画布</div> */}
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}
export default Edit
