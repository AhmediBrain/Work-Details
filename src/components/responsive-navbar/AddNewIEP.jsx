import * as React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'
import { MenuItem, Button, Box, TextField } from '@mui/material';
import styled from 'styled-components';
import { NewStudentIep } from '../../../api-requests/covid-requests';
import { getAllStudents, checkNewIep } from '../../../api-requests/student-requests';
import { useSelector } from 'react-redux'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1% 1%;
    width: 100vw;
`;

export interface IAddNewStudentIepProps {
}

export function AddNewStudentIep (props: IAddNewStudentIepProps) {
  const user = useSelector((state:any) => state.user)
  const [startDate, seStartDate] = React.useState(moment(new Date()).format('YYYY-MM-DD'))
  const [endDate, setEndDate] = React.useState(moment(new Date()).format('YYYY-MM-DD'))
  const [academicYear, setAcademicYear] = React.useState(2023)
  const [student, setStudent] = React.useState("")
  const [allStudents, setAllStudents] = React.useState([])
 

React.useEffect(() => {
    getAllStudents()
    .then((res) => {
    setAllStudents(res)
    })
    .catch(err => console.log(err))
}, [])

const studentChange = (e:any) => {
    setStudent(e.target.value)
}

const startChange = (e:any) => {
    seStartDate(e.target.value)
}
    
const endChange = (e:any) => {
    setEndDate(e.target.value)
}

const yearChange = (e:any) => {    
    setAcademicYear(e.target.value)
}

const handleSubmit = () => {
    console.log(startDate, endDate)
    
    if(startDate >= endDate ){
    alert("Start date must be before end date")
    }
    else if(student === ""){
    alert("Choose Student Name")
    }
    else{
    const iepInfo = {
        "user_id": user.data.user_id,
        "start_date": startDate,
        "end_date": endDate,
        "academic_year": academicYear,
        "student_id": student
    }
    console.log(iepInfo)
    checkNewIep(iepInfo)
    .then((res) => {
        if(res === -1){
        alert("IEP already exists for this student and year")
        }
        else{
        alert("New IEP added")
        }
        console.log(res)})
    .catch(err => console.log(err))
    }
}

return (
    <Container>
        <h1>Add Individualized Education Plan</h1>
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
                
            }}
            noValidate
            autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
        >
            <TextField select 
                value={student}
                type='option' 
                label="Student"
                sx={{width: '22ch'}} 
                onChange={studentChange}
                >
                {allStudents.map((item) => {
                    return(
                        <MenuItem key={item.student_id} 
                            value={`${item.student_id}`}>
                            {`${item.student_fname}` + ` ` + `${item.student_lname}`}
                        </MenuItem>
                    )
                })}
            </TextField>
            <TextField
                required
                label='Academic Year'
                id='outlined-required'
                type='number'
                inputProps={{ min: 2022, max: 2023 }}
                value={academicYear}
                onChange={(e) => yearChange(e.target.value)}    
            />
            <TextField
                required
                label='Start Date'
                id='outlined-required'
                type='date'
                value={startDate}
                onChange={(e) => startChange(e)}
            />
            <TextField
                required
                label='End Date'
                id='outlined-required'
                type='date'
                value={endDate}
                onChange={(e) => endChange(e)}
            />
            <Button
                variant='contained'
                color="primary" 
                onClick={handleSubmit}
                >
                Add/Edit Student Iep
            </Button>
        </Box>  
        
        <Button
            variant='contained'
            color="primary" 
            sx={{
            margin: 2
            }}
            >
            <Link 
                to="../add-update"
                style={{ textDecoration: "none", color: "white",}}>
                Update/Edit Student IEP
            </Link> 
        </Button>
    </Container>
    );
}
