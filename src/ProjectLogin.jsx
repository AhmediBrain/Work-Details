import React, { useContext } from 'react'
import styled from 'styled-components'
import { LoginContext } from './contexts/LoginContext'

const Container = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
`

const ProjectLogin = () => {
    const { setUserName, setShowProfile } = useContext(LoginContext)

  return (
    <Container>
        <h3>Login</h3>
        <form>
            <div>
                <label>UserName:</label>
                <input 
                    type='text' 
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type='password' />
            </div>
            <div>
                <button 
                    type='submit' 
                    onClick={() => setShowProfile(true)}>
                    Login
                </button>
            </div>
        </form>
    </Container>
  )
}

export default ProjectLogin