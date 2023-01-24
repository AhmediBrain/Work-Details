export const userColumns = [
    {
        field: 'id',
        headerName: 'Form ID',
        width: 200
    },
    {
        field: 'user',
        headerName: 'Student Name',
        width: 200,
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'status',
        headerName: 'Form Status',
        width: 200,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
        field: 'completed',
        headerName: 'Completed',
        width: 200,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 230
    }
]


export const userRows = [
    {
        id: 1,
        username: 'SNOW',
        status: 'Close',
        createdBy: 'JAMES',
        title: 'delectus aut autem'
    },
    {
        id: 2,
        username: 'LANNISTER',
        status: 'Open',
        createdBy: 'RICHARD',
        title: 'quis ut nam facilis et officia qui'
    },
    {
        id: 3,
        username: 'JAIME',
        status: 'Open',
        createdBy: 'PATRICK',
        title: 'fugiat veniam minus'
    },
    {
        id: 4,
        username: 'STARK',
        status: 'Close',
        createdBy: 'PATRICK',
        title: 'et porro tempora'
    },
    {
        id: 5,
        username: 'TARGARYEN',
        status: 'Open',
        createdBy: 'RICHARD',
        title: 'laboriosam mollitia'
    },
    {
        id: 6,
        username: 'MELISANDRE',
        status: 'Open',
        createdBy: 'RICHARD',
        title: 'illo expedita consequatur'
    },
    {
        id: 7,
        username: 'CLIFFORD',
        status: 'Close',
        createdBy: 'JAMES',
        title: 'qui ullam ratione'
    },
    {
        id: 8,
        username: 'FRANCES',
        status: 'Open',
        createdBy: 'JAMES',
        title: 'molestiae perspiciatis ipsa'
    },
    {
        id: 9,
        username: 'ROXIE',
        status: 'Open',
        createdBy: 'PATRICK',
        title: 'illo est ratione doloremque'
    },
    {
        id: 10,
        username: 'HARVEY',
        status: 'Close',
        createdBy: 'JAMES',
        title: 'vero rerum temporibus dolor'
    },
    {
        id: 11,
        username: 'ELISAVETA',
        status: 'Close',
        createdBy: 'RICHARD',
        title: 'delectus aut autem'
    },
    {
        id: 12,
        username: 'TALON',
        status: 'Open',
        createdBy: 'RICHARD',
        title: 'ipsa repellendus fugit nisi'
    },
    {
        id: 13,
        username: 'AISLYNN',
        status: 'Open',
        createdBy: 'PATRICK',
        title: 'et doloremque nulla'
    },
    {
        id: 14,
        username: 'AMAYAH',
        status: 'Close',
        createdBy: 'JAMES',
        title: 'repellendus sunt dolores architecto voluptatum'
    },
    {
        id: 15,
        username: 'ALICIA',
        status: 'Open',
        createdBy: 'JAMES',
        title: 'ab voluptatum amet voluptas'
    },
    {
        id: 16,
        username: 'ANGEL',
        status: 'Open',
        createdBy: 'PATRICK',
        title: 'quo laboriosam deleniti aut qui'
    },
    {
        id: 17,
        username: 'BENNY',
        status: 'Close',
        createdBy: 'PATRICK',
        title: 'dolorum est consequatur ea mollitia'
    },
    {
        id: 18,
        username: 'ARLETTE',
        status: 'Open',
        createdBy: 'JAMES',
        title: 'molestiae ipsa aut voluptatibus'
    },
    {
        id: 19,
        username: 'CALDERON',
        status: 'Open',
        createdBy: 'RICHARD',
        title: 'aliquam aut quasi'
    },
    {
        id: 20,
        username: 'LOPEZ',
        status: 'Close',
        createdBy: 'JAMES',
        title: 'laborum aut in quam'
    }
]