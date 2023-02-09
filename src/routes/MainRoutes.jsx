import React from 'react'
import { useRoutes } from 'react-router-dom'
import DateRangeFilter from '../components/date-filter/DateRangeFilter'
import ComponentRoutes from './ComponentRoutes'

const MainRoutes = () => {
  return useRoutes ([
    {
        ...ComponentRoutes()
    },
    {
        path: '/date-range',
        element: <DateRangeFilter />
    }
  ])
}

export default MainRoutes