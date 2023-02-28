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
            <Link to='/forms/form-page'>
                Form
            </Link>
        </div>
        <div>
            <Link to='date-filter'>
                Date Filter
            </Link>
        </div>
        <div>
            <Link to='practice'>
                Practice
            </Link>
        </div>
        <div>
            <Link to='search'>
                Search
            </Link>
        </div>
        <div>
            <Link to='open-modal'>
                Modal
            </Link>
        </div>
        <div>
            <Link to='mapping'>
                Mapping
            </Link>
        </div>
        <div>
            <Link to='information'>
                Information
            </Link>
        </div>
    </Container>
  )
}

export default Navbar