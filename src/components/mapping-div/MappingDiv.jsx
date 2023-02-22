import { InputLabel } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3%;
    justify-content: space-between;
`
const Widget = styled.div`
    display: flex;
    padding: 5px;
    gap: 10px;
    width: 250px;
    height: 250px;
    border: solid 1px gray;
`
const AddButton = styled.button`
    width: 75px;
    border: none;
    border-radius: 8px;
    background-color: cornflowerblue;
    padding: 5px;
    color: white;
    font-size: 15px;
`

const MappingDiv = () => {
  const [addMore, setAddMore] = useState([])

  const handleAddMore = () => {
    const moreAdd = [...addMore, []]
    setAddMore(moreAdd)
  }

  const handleCancel = (e) => {
    const cancelTask = [...addMore]
    cancelTask.splice(e, 1)
    setAddMore(cancelTask)
  }

  return (
    <Container>
       <InputLabel>
        Click the Add Button
       </InputLabel>
       <AddButton 
        onClick={() => handleAddMore()}>
        Add
       </AddButton>
       {addMore.map((data, f) => {
        return(
          <>
            <Widget key={f}>
              <InputLabel  
                value={data}>
                Hello
              </InputLabel>
            </Widget>
            <button 
              type='button' 
              onClick={(e) => handleCancel(e, f)}>
              X
            </button>
          </>
        )
       })}
    </Container>
  )
}

export default MappingDiv