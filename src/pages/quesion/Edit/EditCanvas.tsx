import React, { FC } from 'react'
import styles from './EditCanvas.module.scss'
import QuestionInput from '../../../components/QuestionInput/Component'
import QuestionTitle from '../../../components/QuestionTitle/Component'
const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div>
        <QuestionInput />
      </div>
      <div>
        <QuestionTitle />
      </div>
    </div>
  )
}
export default EditCanvas
