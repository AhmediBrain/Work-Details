import React, { useState } from 'react'
import styled from 'styled-components'
import { searchTitle } from './searchData'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
`

const SimpleSearchTable = () => {
    const [value, setValue] = useState('')
    console.log(value)

  return (
    <Container>
        <div>
            <input 
                type='text' 
                placeholder='Search...' 
                onChange={(e) => setValue(e.target.value)} />
            <table style={{display: 'flex'}}>
                <thead>
                    <tr>
                        {searchTitle.map((item, index) => {
                            return(
                                <td key={index}>{item.title}</td>
                            )
                        })}
                    </tr>
                    
                </thead>
            </table>
        </div>
    </Container>
  )
}

export default SimpleSearchTable