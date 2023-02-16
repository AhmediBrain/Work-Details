import React, { useState } from 'react'
import styled from 'styled-components'
import { searchData } from './searchData'

const Container = styled.div`
    display: flex;
`

const SimpleSearchData = () => {
    const [search, setSearch] = useState('')
    console.log(search)

  return (
    <Container>
        <div>
            <input 
                type='text' 
                placeholder='Search...' 
                onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
            {searchData.filter((item) => {
                return search.toLowerCase() === '' ? 
                item : item.author.toLowerCase().includes(search)
            }).map((item, index) => {
                return(
                    <ul key={index}>
                        <li>{item.author}</li>
                        <li>{item.country}</li>
                        <li>{item.language}</li>
                    </ul>
                )
            })
            }
        </div>
    </Container>
  )
}

export default SimpleSearchData