import { InputLabel, MenuItem, Select } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import styled from 'styled-components'
import { dateRanges } from './dateFilterData'
import DateFilterItems from './DateFilterItems'
import UniqueList from '../UniqueList'

const Container = styled.div`
    display: flex;
    margin: 1%;
`
const ListSec = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const DateFilterTypes = () => {
    const [value, setValue] = useState('');
    const [dateType, setDateType] = useState(moment(new Date()).format('YYYY-MM-DD'))

    const dateChange = (e) => {
        setValue(e.target.value);
        setDateType(e.target.value)
        console.log(e.target.value)
    }

  return (
    <Container>
        <ListSec>
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
        </ListSec>

        <ListSec>
            <UniqueList />
        </ListSec>
    </Container>
  )
}

export default DateFilterTypes

// if(result && Array.isArray(result)) {
        //     const data = result;

        // const studentTotals = {};

        // data.forEach((session) => {
        //     const studentID = session.student_id;

        //     if(!studentTotals[studentID]) {
        //         studentTotals[studentID] = {
        //             num_th_sessions: session.num_th_sessions,
        //             percentage_th: session.percentage_th,
        //             total_sessions: session.total_sessions,
        //             total_th_hours: session.total_th_hours,
        //         };
        //     } 
        //     else {
        //         studentTotals[studentID].num_th_sessions += session.num_th_sessions;
        //     }
        // });

        // for (const studentID in studentTotals) {
        //     if (studentTotals.hasOwnProperty(studentID)) {
        //       console.log("Student ID:", studentID);
        //       console.log("Total TH Sessions:", studentTotals[studentID].num_th_sessions);
        //       console.log("Percentage TH:", studentTotals[studentID].percentage_th);
        //       console.log("Total Sessions:", studentTotals[studentID].total_sessions);
        //       console.log("Total TH Hours:", studentTotals[studentID].total_th_hours);
        //       console.log("\n");
        //     }
        //   }
        // }