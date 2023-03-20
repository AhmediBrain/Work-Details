import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Home from '../Home'
//import Form from '../components/forms/Form'
import DateFilterTypes from '../components/date-filter/DateFilterTypes'
//import FilterPracticeTypes from '../components/date-filter/filter-practice/FilterPracticeTypes'
import SimpleSearchTable from '../search/SimpleSearchTable'
import FilterRangeTypes from '../components/date-filter/filter-practice/FilterRangeTypes'
import ModalContainer from '../components/modal/ModalContainer'
import MappingDiv from '../components/mapping-div/MappingDiv'
import ParentsInfo from '../components/ParentsInfo'
import MultipleApi from '../components/MultipleApi'
import BasicForm from '../components/forms/BasicForm'
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
          element: <BasicForm />
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
    },
    {
      path: 'open-modal',
      element: <ModalContainer />
    },
    {
      path: 'mapping',
      element: <MappingDiv />
    },
    {
      path: 'information',
      element: <ParentsInfo />
    },
    {
      path: 'multiple',
      element: <MultipleApi />
    }
  ])

  return element;
}

export default MainRoutes