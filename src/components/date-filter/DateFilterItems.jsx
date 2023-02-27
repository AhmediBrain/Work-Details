import { TextField } from '@mui/material'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'

const DateFilterItems = ({type, name}) => {
    const [forDate, setForDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [toDate, setToDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
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
                            defaultValue={forDate} 
                            onChange={forDateChange} />
            
                        <TextField 
                            type='date'
                            label='To' 
                            defaultValue={toDate} 
                            onChange={toDateChange} />
                    </>
                ) : null
        }
    </div>
  )
}

export default DateFilterItems