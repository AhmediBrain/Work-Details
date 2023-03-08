import React, { useRef, useState } from 'react'
import ReactToPrint from 'react-to-print'
import styled from 'styled-components'
import { searchData, searchTitle } from './searchData'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1%;
`
const Button = styled.button`
    width: 160px;
    height: 40px;
    margin: auto;
    padding: 10px auto;
    border: none;
    border-radius: 10px;
    background-color: #0D7BFF;
    color: white;
`

const SimpleSearchTable = () => {
    const [search, setSearch] = useState('')
    console.log(search)
    const componentRef = useRef()

  return (
    <Container>
        <div>
            <input 
                type='text' 
                placeholder='Search...' 
                onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div ref={componentRef}>
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
        <ReactToPrint 
            trigger={() => 
                <Button 
                    type='button'>
                    Print
                </Button>} 
                content={() => componentRef.current} />
    </Container>
  )
}

export default SimpleSearchTable