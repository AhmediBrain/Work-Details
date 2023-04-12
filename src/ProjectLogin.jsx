import React, { useContext } from 'react'
import styled from 'styled-components'
import { LoginContext } from './contexts/LoginContext'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Details = styled.div`
    display: flex;
    margin: auto;
    justify-content: 
`

const ProjectLogin = () => {
    const { setUserName, setShowProfile } = useContext(LoginContext)

  return (
    <Container>
        <h3>Login</h3>
        <LoginForm>
            <Details>
                <label>UserName:</label>
                <input 
                    type='text' 
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
            </Details>
            <Details>
                <label>Password:</label>
                <input 
                    type='password' />
            </Details>
            <Details>
                <button 
                    type='submit' 
                    onClick={() => setShowProfile(true)}>
                    Login
                </button>
            </Details>
        </LoginForm>
    </Container>
  )
}

export default ProjectLogin