import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../Home'
import Form from '../components/forms/Form'
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
      element: <Form />
    }
  ])

  return element;
}

export default MainRoutes