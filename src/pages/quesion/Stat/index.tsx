import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
const Stat: FC = () => {
  const { loading, data } = useLoadQuestionData()

  return (
    <div>
      <p>编辑问卷</p>
      {loading ? <p></p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}
export default Stat
