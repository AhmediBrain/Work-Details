import { InputLabel, MenuItem, Select } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import styled from 'styled-components'
import { dateRanges } from './dateFilterData'
import DateFilterItems from './DateFilterItems'

const Container = styled.div`
    display: flex;
    margin: 1%;
`

const DateFilterTypes = () => {
    const [value, setValue] = useState('');
    const [dateType, setDateType] = useState(moment(new Date()).format('YYYY-MM-DD'))

    const dateChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

  return (
    <Container>
        <InputLabel>
            Date Types: 
        </InputLabel>
        <Select 
            sx={{width: '25ch'}} 
            value={value} 
            onChange={dateChange}>
            {dateRanges.map((item, index) => {
                return(
                    <MenuItem key={index} 
                        value={item.field}>
                        {item.headerName}
                    </MenuItem>
                )
            })}
        </Select>
        {value && <DateFilterItems 
            type={value} name={dateType} />}
    </Container>
  )
}

export default DateFilterTypes