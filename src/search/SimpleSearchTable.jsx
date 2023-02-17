import React, { useState } from 'react'
import styled from 'styled-components'
import { searchData, searchTitle } from './searchData'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1%;
`

const SimpleSearchTable = () => {
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
            <table>
                <thead>
                    {searchTitle.map((item, index) => {
                        return(
                            <th key={index}>
                                {item.title}
                            </th>
                        )
                    })}
                </thead>
                <tbody>
                    {searchData.filter((item) => {
                        return search.toLowerCase() === '' ? 
                        item : item.author.toLowerCase().includes(search)
                    }).map((item, index) => {
                        return(
                            <tr>
                                <td key={index}>
                                    {item.author}
                                </td>
                                <td>
                                    {item.country}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.language}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    </Container>
  )
}

export default SimpleSearchTable