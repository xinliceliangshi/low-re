import { useRequest } from 'ahooks'
// import { getQuestionListService } from '../services/question'
import { useEffect, useState } from 'react'
import { getQuestionListService } from '../services/question'
type OptionType = {
  isStar: boolean
  isDeleted: boolean
}
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from '../constance/index'

import { useSearchParams } from 'react-router-dom'
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar, isDeleted } = opt
  const [searchParams, setSearchParams] = useSearchParams()
  const { data, error, refresh, loading } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE
      const data = await getQuestionListService({ keyword, page, pageSize, isStar, isDeleted })
      return data
    },
    {
      refreshDeps: [searchParams.toString()],
    }
  )
  return { data, loading, error, refresh }
}
export default useLoadQuestionListData
