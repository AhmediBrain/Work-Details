import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from './datatablesource'

const ViewTransferForm = () => {
    
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Operation',
            width: 130,
            renderCell: (params) => {
                return(
                    <div className='cellAction'>
                        <div className='deleteBtn' 
                            onClick={(params.row.id)}>
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
            View Student Transfer hand-off Forms:
        </div>

            <DataGrid 
                rows={userRows} 
                columns={userColumns.concat(actionColumn)} 
                pageSize={8} 
                rowsPerPageOptions={[8]}>
            </DataGrid>
           
    </div>
  )
}

export default ViewTransferForm