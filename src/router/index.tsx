import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayouts from '../pages/Layouts/MainLayouts'
import ManagerLayout from '../pages/Layouts/ManagerLayout'
import QuestionLayout from '../pages/Layouts/QestionLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import List from '../pages/manager/List'
import Trash from '../pages/manager/Trash'
import Star from '../pages/manager/Star'
import Stat from '../pages/quesion/Stat'
import Edit from '../pages/quesion/Edit'

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: 'manager',
        element: <ManagerLayout />,
        children: [
          { path: 'list', element: <List /> },
          { path: 'trash', element: <Trash /> },
          { path: 'star', element: <Star /> },
        ],
      },
      { path: '/404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      { path: 'stat/:id', element: <Stat /> },
      { path: 'edit/:id', element: <Edit /> },
    ],
  },
])
export default routerConfig
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGER_LIST_PATHNAME = '/manager/list'
export const MANAGER_STAR_PATHNAME = '/manager/star'
export const MANAGER_TRASH_PATHNAME = '/manager/trash'
export const QUESTION_EDIT_PATHNAME = '/question/edit'
