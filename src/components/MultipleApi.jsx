import { MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { bookInfo, infoData } from './multipleData'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
`
const NameSelect = styled.select`
    width: 200px;
    height: 40px;
    padding: 5px;
`
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Para = styled.p`
    margin: 0px;
`

const MultipleApi = () => {
    const [authorId, setAuthorId] = useState('')

    const handleNameChange = (e) => {
        setAuthorId(e.target.value);
        console.log(e.target.value);
    }

  return (
    <Container>
        <NameDiv>
            <NameSelect 
                value={authorId} 
                onChange={handleNameChange}>
                {infoData.map((sub, i) => {
                    const fName = sub.first_name;
                    const lName = sub.last_name;
                    var fullName = (`${fName}` + ' ' + `${lName}`)

                    return(
                        <option 
                            key={i} 
                            value={sub.id}>
                            {fullName}
                        </option>
                    )
                })}
            </NameSelect>
        </NameDiv>
        <NameDiv>
            <Para>
                {infoData.length > 0 ? infoData[0].first_name : 'Author Name'}
            </Para>
            <Para>Author is from Country.</Para>
        </NameDiv>
        <NameDiv>
            <table>
                <thead>
                    <tr>
                        {bookInfo.map((title) => {
                            return(
                                <th key={title.id}>
                                    {title.headerName}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            No Data 
                        </td>
                        <td>
                            No Data
                        </td>
                        <td>
                            No Data
                        </td>
                        <td>
                            No Data
                        </td>
                    </tr>
                </tbody>
            </table>
        </NameDiv>
    </Container>
  )
}

export default MultipleApi