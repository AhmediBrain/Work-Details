export const userColumns = [
    { 
        field: 'id', 
        headerName: 'Form ID', 
        width: 200 
    },
    { 
        field: 'user', 
        headerName: 'Student Name', 
        width: 230,
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    {params.row.username}
                </div>
            )
        }
    },
    { 
        field: 'email', 
        headerName: 'Form Status', 
        width: 200 
    },
    { 
        field: 'address', 
        headerName: 'Form Ceated At', 
        width: 130 
    },
    { 
        field: 'status', 
        headerName: 'Created By', 
        width: 130,
        renderCell: (params) => {
           return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
           ) 
        } 
    }
]


export const userRows = [
    { 
        id: 1, 
        username: 'Snow', 
        status: 'active',
        email: 'onesnow@ibrainnyc.com',
        age: 35 
    },
    { 
        id: 2, 
        username: 'Lannister', 
        status: 'passive',
        email: 'lanni@ibrainnyc.com', 
        age: 42 
    },
    { 
        id: 3, 
        username: 'Jaime', 
        status: 'active',
        email: 'jamie@ibrainnyc.com', 
        age: 45,
    },
    { 
        id: 4, 
        username: 'Stark', 
        status: 'active',
        email: 'stark@ibrainnyc.com',
        age: 16 
    },
    { 
        id: 5, 
        username: 'Targaryen', 
        status: 'passive',
        email: 'targ@ibrainnyc.com',
        age: null 
    },
    { 
        id: 6, 
        username: 'Melisandre', 
        status: 'active',
        email: 'melis@ibrainnyc.com',
        age: 29 
    },
    { 
        id: 7, 
        username: 'Clifford', 
        status: 'active',
        email: 'cliff@ibrainnyc.com', 
        age: 44 
    },
    { 
        id: 8, 
        username: 'Frances', 
        status: 'passive',
        email: 'frances@ibrainnyc.com', 
        age: 36 
    },
    { 
        id: 9, 
        username: 'Roxie', 
        status: 'passive',
        email: 'roxie@ibrainnyc.com', 
        age: 35 
    },
    { 
        id: 10, 
        username: 'Harvey', 
        status: 'active',
        email: 'harvey@ibrainnyc.com', 
        age: 38 
    }
  ];