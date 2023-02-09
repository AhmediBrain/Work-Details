import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';
import { MenuItem, Select } from '@mui/material';
import { dateRanges } from './dateFilterData';


const DateRangeFilter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])


    useEffect(() => {
        axios.get('https://63e3cccf65ae49317717cc20.mockapi.io/any')
        .then(res => {
            setData(res.data);
            setAllData(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    
    const handleSelect = (date) => {
        let filtered = allData.filter((nameDate) => {
            let userDate = new Date(nameDate['createdAt']);
            console.log(userDate)
            return(
                userDate >= date.selection.startDate && 
                userDate <= date.selection.endDate
            )
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setData(filtered)
        console.log(date.selection.endDate)
    }

  return (
    <div>
        <Select>
            {dateRanges.map((item, index) => {
                return(
                    <>
                        <MenuItem 
                        key={index} 
                        value={item.field}>
                        {item.headerName}
                    </MenuItem>
                    <div>
                        {item.field === 'custom_date' ? 
                            <div>
                                <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
        />
        <table style={{border: 'solid 1px'}}>
            <thead>
                <tr>
                    <th>
                        Student Name:
                    </th>
                    <th>
                        Session Date:
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => {
                    let date = new Date(user['createdAt'])
                    return(
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{date.toLocaleDateString()}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
                            </div> :
                            null
                        }
                    </div>
                    </>
                )
            })}
        </Select>
        <h3> Date Range Filter </h3>
        
    </div>
  )
}

export default DateRangeFilter