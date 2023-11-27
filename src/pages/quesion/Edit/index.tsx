import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../services/question'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <p>编辑问卷</p>
      {loading ? <p></p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}
export default Edit
