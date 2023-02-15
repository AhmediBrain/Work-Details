import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 1%;
    justify-content: flex-start;
    gap: 10px;
`

const Navbar = () => {
  return (
    <Container>
        <div>
            <Link to='/'>
                Home
            </Link>
        </div>
        <div>
            <Link to='forms'>
                Form
            </Link>
        </div>
    </Container>
  )
}

export default Navbar