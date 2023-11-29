import React, { FC, useState, useEffect, useRef, useMemo } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QesionCard'
import { Typography, Spin, Empty } from 'antd'
import { useDebounceFn, useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'
import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '../../services/question'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from '../../constance'
import { set } from 'react-hook-form'
// const rowQuestion = [
//   {
//     _id: 'q1',
//     title: '问卷1',
//     isPublished: true,
//     isStar: false,
//     answerCount: 0,
//     createdAt: '2020-11-01',
//     updatedAt: new Date(),
//   },
//   {
//     _id: 'q2',
//     title: '问卷2',
//     isPublished: false,
//     isStar: true,
//     answerCount: 5,
//     createdAt: '2020-11-01',
//     updatedAt: new Date(),
//   },
// ]
const { Title } = Typography
const List: FC = () => {
  useTitle('我的问卷')
  const [started, setStarted] = useState(false)
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const haveMoreData = total > list.length
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

  useEffect(() => {
    setStarted(false)
    setPage(1)
    setList([])
    setTotal(0)
  }, [keyword])

  const { run: load, loading } = useRequest(
    async () => {
      const data = await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword: searchParams.get(LIST_PAGE_PARAM_KEY) || '',
      })
      console.log(data, 'data')
      return data
    },
    {
      manual: true,
      onSuccess(res) {
        const { list: l = [], total = 0 } = res
        setList(list.concat(l))
        setTotal(total)
        setPage(page + 1)
      },
    }
  )
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const elem = containerRef.current
      if (elem == null) return
      const domRect = elem.getBoundingClientRect()
      if (domRect == null) return
      const { bottom } = domRect
      if (bottom <= document.body.clientHeight) {
        // console.log('load')
        load()
        setStarted(true)
      }
    },
    {
      wait: 1000,
    }
  )
  const LoadMoreConentElem = useMemo(() => {
    if (!started) return <Spin />
    if (total === 0) return <Empty description="暂无数据" />
    if (!haveMoreData) return <div>没有更多数据了</div>
    return <div>开始加载下一页</div>
  }, [started, haveMoreData])
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener('scroll', tryLoadMore)
    }
    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  }, [searchParams, haveMoreData])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* <div style={{ height: '2000px' }}></div> */}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>
        <div ref={containerRef}>{LoadMoreConentElem}</div>
      </div>
    </>
  )
}
export default List
