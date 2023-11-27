import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionListService } from '../../../services/question'
const Edit: FC = () => {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   async function fn() {
  //     const res = await getQuestionListService()
  //     console.log(res)
  //   }
  //   fn()
  // }, [])
  return <div>Edit {id}</div>
}
export default Edit
