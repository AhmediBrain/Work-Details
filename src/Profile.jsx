import React, { useContext } from 'react'
import { LoginContext } from './contexts/LoginContext'
import Navbar from './Navbar'
import MainRoutes from './routes/MainRoutes'

const Profile = () => {
    const { userName } = useContext(LoginContext)

  return (
    <div>
        <h1>
            Hello {userName}
        </h1>
        <Navbar />
        <MainRoutes />
    </div>
  )
}

export default Profile