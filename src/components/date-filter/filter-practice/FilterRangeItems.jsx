import { TextField } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

const FilterRangeItems = ({type, name}) => {
    const [forDate, setForDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [toDate, setToDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [dateValue, setDateValue] = useState('')

    const forDateChange = (e) => {
        setForDate(e.target.value);
        console.log(e.target.value);
    }

    const toDateChange = (e) => {
        setToDate(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        setDateValue(name);
        console.log(name)
    }, [name])

  return (
    <Container>
        {type === 'custom_date' ? 
            (dateValue && 
                <>
                    <TextField 
                        label='From' 
                        type='date' 
                        sx={{width: '20ch'}} 
                        value={forDate} 
                        onChange={forDateChange} 
                        inputProps={{
                            style: {
                                height: '1ch'
                            }
                        }} />
                    <TextField 
                        label='To' 
                        type='date' 
                        sx={{width: '20ch'}} 
                        value={toDate} 
                        onChange={toDateChange} 
                        inputProps={{
                            style: {
                                height: '1ch'
                            }
                        }} />
                </>
            ) : null
        }
    </Container>
  )
}

export default FilterRangeItems