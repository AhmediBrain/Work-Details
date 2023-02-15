import { TextField } from '@mui/material'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'

const DateFilterItems = ({type, name}) => {
    const [forDate, setForDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [dateValue, setDateValue] = useState('')

    const forDateChange = (e) => {
        setForDate(e.target.value);
        console.log(e.target.value);
    }

    const toDateChange = (e) => {
        setToDate(e.target.value);
        console.log(e.target.value);
    }
    
    useEffect(() => {
        setDateValue(name)
    }, [name])

  return (
    <div>
        {type === 'custom_date' ? 
                (dateValue && 
                    <>
                        <TextField 
                            type='date' 
                            label='From' 
                            defaultValue={moment(new Date()).format('YYYY-MM-DD')} 
                            onChange={forDateChange} />
            
                        <TextField 
                            type='date'
                            label='To' 
                            defaultValue={moment(new Date()).format('YYYY-MM-DD')} 
                            onChange={toDateChange} />
                    </>
                ) : null
        }
    </div>
  )
}

export default DateFilterItems