import React, { useState } from 'react'
import styled from 'styled-components';
import { dateRangesList } from './listOfDateRanges';

const Container = styled.div`
    display: flex;
    margin: 1%;
    justify-content: center;
`;

const DateRangeSummaryReport = () => {
    const [dateRange, setDateRange] = useState('this_week');

    const handleDateRangeChange = (e) => {
        const selectedDateRange = e.target.value;
        setDateRange(selectedDateRange);
        console.log('Selected:#', selectedDateRange);
    }

  return (
    <Container>
        <select 
            name='date_range' 
            id='date_range' 
            style={{width: '20%', height: '30px', marginRight: '8px'}} 
            value={dateRange} 
            onChange={handleDateRangeChange}>
                {dateRangesList.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.title}</option>
                    )
                })}
        </select>
        <div>
            {dateRange === 'range' && (
                <>
                    <label style={{ marginRight: '8px' }}>From:</label>
                    <input type='date' 
                        placeholder='mm/dd/YYYY' 
                        style={{ height: '30px', marginRight: '8px' }} />
                    <label style={{ marginRight: '8px' }}>To:</label>
                    <input type='date' 
                        placeholder='mm/dd/YYYY' 
                        style={{ height: '30px' }} />
                </>
            )}
        </div>
    </Container>
  )
}

export default DateRangeSummaryReport