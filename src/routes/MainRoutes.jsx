import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Home from '../Home'
import Form from '../components/forms/Form'
import DateFilterTypes from '../components/date-filter/DateFilterTypes'
//import FilterPracticeTypes from '../components/date-filter/filter-practice/FilterPracticeTypes'
import SimpleSearchTable from '../search/SimpleSearchTable'
import FilterRangeTypes from '../components/date-filter/filter-practice/FilterRangeTypes'
// children: [
//   {
//     path: "forms",
//     element: <Form />
//   }
// ]

const MainRoutes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'forms',
      element: <>
                  <Outlet />
              </>,
      children: [
        {
          path: 'form-page',
          element: <Form />
        }
      ]
    },
    {
      path: 'date-filter',
      element: <DateFilterTypes />
    },
    {
      path: 'practice',
      //element: <FilterPracticeTypes />
      element: <FilterRangeTypes />
    },
    {
      path: 'search',
      //element: <SearchDataFilter />
      //element: <SimpleSearchData />
      element: <SimpleSearchTable />
    }
  ])

  return element;
}

export default MainRoutes