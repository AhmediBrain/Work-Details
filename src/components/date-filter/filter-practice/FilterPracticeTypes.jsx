import { InputLabel, MenuItem, Select } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import styled from 'styled-components'
import { dateRanges } from '../dateFilterData'
import FilterPracticeItems from './FilterPracticeItems'

const Container = styled.div`
    display: flex;
    margin: 1%;
    justify-content: space-between;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FilterPracticeTypes = () => {
    const [value, setValue] = useState('');
    const [dateType, setDateType] = useState(moment(new Date()).format('YYYY-MM-DD'))

    const rangeChange = (e) => {
        setValue(e.target.value);
        setDateType(e.target.value);
        console.log(e.target.value)
    }

  return (
    <Container>
        <Wrapper>
            <InputLabel>
                Date Ranges:
            </InputLabel>
            <Select 
                sx={{width: '25ch'}} 
                onChange={rangeChange} 
                value={value}>
                {dateRanges.map((item, index) => {
                    return(
                        <MenuItem 
                            key={index} 
                            value={item.field}>
                            {item.headerName}
                        </MenuItem>
                    )
                })}
            </Select>
        </Wrapper>
        <Wrapper>
            {value && <FilterPracticeItems type={value} name={dateType} />}
        </Wrapper>
    </Container>
  )
}

export default FilterPracticeTypes