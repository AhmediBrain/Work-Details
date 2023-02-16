import { TextField } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin-top: 20px;
`

const FilterPracticeItems = ({type, name}) => {
    const [forDate, setForDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [toDate, setToDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [value, setValue] = useState('')

    const fromDateChange = (e) => {
        setForDate(e.target.value);
        console.log(e.target.value);
    }

    const toDateChange = (e) => {
        setToDate(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        setValue(name)
    }, [name])

  return (
    <Container>
        {type === 'custom_date' ? 
            (value && 
                <>
                    <TextField 
                        sx={{width: '25ch', marginRight: '10px'}} 
                        label='From' 
                        type='date' 
                        defaultValue={forDate} 
                        onChange={fromDateChange} />

                    <TextField 
                        sx={{width: '25ch'}} 
                        label='To' 
                        type='date' 
                        defaultValue={toDate} 
                        onChange={toDateChange} />
                </>
            ) : null
        }
    </Container>
  )
}

export default FilterPracticeItems