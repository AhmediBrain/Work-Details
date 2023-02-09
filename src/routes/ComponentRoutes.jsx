import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import ContactForm from '../components/views/forms/ContactForm'

const ViewContainer = styled.div`
    display: flex;
    width: 100%;
`

const ComponentRoutes = () => {
  return {
    path: '/froms',
    element: <ViewContainer>
                <Outlet />
            </ViewContainer>,
    children: [
        {
            path: 'contact-form',
            element: <ContactForm />
        }
    ]
  }
}

export default ComponentRoutes