import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns } from './dataviewsource'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useState } from 'react'
//import axios from 'axios'
import { useEffect } from 'react'

// const api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/todos'
// })

const ViewTransferCopy = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([])

    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleDelete = (id) => {
        const userDelete = data.filter((item) => item.id !== id);
        setData(userDelete);
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then(result => setData(result))
        //console.log(data)
    }, [])

    const rows = data.map((item) => (
        {
            id: item.id,
            title: item.title,
            completed: item.completed,
            action: (<button onClick={() => handleDelete(item.id)}></button>)
        }
    ))

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Operation',
            width: 200,
            renderCell: (params) => {
                return(
                    <div className='cellAction'>
                        <div className='deleteBtn' 
                            onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
        <div className='dataTabletitle'>
            View Student Transfer Hand-Off Forms:
        </div>
        <div className='wrapper'>
            <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' 
                    placeholder='Search...' 
                    id='student-search' 
                    value={value} 
                    onChange={onChange} />
            </div>
        </div>
        {data && <DataGrid 
            rows={rows} 
            columns={userColumns.concat(actionColumn)} 
            pageSize={25} 
            rowsPerPageOptions={[25]} />}
    </div>
  )
}

export default ViewTransferCopy