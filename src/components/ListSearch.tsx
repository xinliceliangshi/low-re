import React, { FC, useState, useEffect } from 'react'
import { Input } from 'antd'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
const { Search } = Input
import { LIST_SEARCH_PARAN_KEY } from '../constance'
const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchValue, setSearchValue] = useState('')
  function handleSearch(value: string) {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAN_KEY}=${value}`,
    })
  }
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const searchValue = searchParams.get(LIST_SEARCH_PARAN_KEY) || ''
    setSearchValue(searchValue)
    setSearchValue(searchValue)
  }, [searchParams])
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }
  return (
    <div>
      <Search
        value={searchValue}
        placeholder="请输入搜索内容"
        onSearch={handleSearch}
        style={{ width: 200 }}
        onChange={handleChange}
      />
    </div>
  )
}
export default ListSearch
