import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import styles from './Questions.module.scss'
const QuestionLayout: FC = () => {
  return (
    <>
      {/* <div>Question header</div> */}
      <div>
        <Outlet />
      </div>
      {/* <div>Question footer</div> */}
    </>
  )
}
export default QuestionLayout
