import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns } from './viewDataTableSource'
import { useEffect } from 'react'

const ViewDataTransfer = () => {
    const [data, setData] = useState([])

    const handleDelete = (id) => {
        const userDelete = data.filter(item => item.id !== id);
        setData(userDelete)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((result) => {
            setData(result);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Operation',
            width: 200,
            renderCell: (params) => {
                return(
                    <div className='cellAction'>
                        <button className='deleteBtn' 
                            onClick={() => handleDelete(params.row.id)}>
                                Delete
                        </button>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
        <div className='dataTabletitle'>
            View Transfer Form
        </div>
        <DataGrid 
            columns={userColumns.concat(actionColumn)} 
            rows={data}>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </DataGrid>
    </div>
  )
}

export default ViewDataTransfer