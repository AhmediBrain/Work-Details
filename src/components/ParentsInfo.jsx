import { InputLabel, MenuItem, Select } from '@mui/material'
//import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { searchData } from '../search/searchData'

const Container = styled.div`
    display: flex;
    flex: 1;
    min-height: 100px;
    margin: 1%;
    flex-direction: column;
    gap: 10px;
`
const Modal = styled.div`
    display: flex;
    width: 200px;
    min-height: 100px;
    border: solid 1px gray;
`

// const api = axios.create({
//     baseURL: ''
// })

const ParentsInfo = () => {
    const [conValue, setConValue] = useState('')
    console.log(conValue)
    // const [chooseStudent, setChooseStudent] = ([])
    const [show, setShow] = useState(false)
    // const { control } = useFormContext()
    //const [contact, setContact] = useState([])
    //const [studentId, setStudentId] = useState('')
    const title = searchData.map((user) => (
        <span key={user.id} 
            value={user.id}>
            {user.title}
        </span>
    ))

    //console.log(title)

    const data = searchData.map((item) => (
        <span key={item.id} 
            value={item.id}>
                {item.info}
        </span>        
    ));

    console.log(data)
    // var arr = data.map( item=> {
    //     console.log(item, item['imageLink'],
    //     '\n====>')
    //     // item.imageLink
    // });
    // console.log(arr, "??");

    // const iterator = [data.imageLink];
    // //console.log(iterator, 'Give me the value')
    // console.log(iterator.value, 'Give me the value');

    

    const handleStudentChange = (e) => {
        setConValue(e.target.value);
        //setStudentId(e.target.value);
    }

    const handleContact = () => {
        setShow(true)
    }

    // useEffect(() => {
    //     api.post('a_fetch_all_students.php')
    //     .then(res => {
    //         setChooseStudent(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    // useEffect(() => {
    //     api.post('a_fetch_student_contact.php', null, {
    //         params: {
    //             student_id: studentId,
    //         }
    //     })
    //     .then(res => {
    //         if(!res.data.length === res.data.email) {
    //             console.log('No Data')
    //         } else {
    //             setContact(res.data);
    //             console.log(res.data)
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [studentId])

  return (
    <Container>
        <InputLabel>
            Choose Author:
        </InputLabel>
        <Select 
            name='authorName' 
            sx={{width: '35ch', height: '50px'}} 
            value={conValue} 
            onChange={handleStudentChange}>
            {searchData.map((item) => {
                return(
                    <MenuItem 
                        key={item.id} 
                        value={item.id} 
                        onClick={() => handleContact()}>
                        {item.author}
                    </MenuItem>
                )
            })}
        </Select>
        {show && 
            <Modal>
                {data ? <p>No Data Found</p> : title}
                    {/* // searchData.map((item) => {
                    //     return(
                    //         <p key={item.id} 
                    //             value={item.id}>
                    //             {item.title}
                    //         </p>
                    //     )
                    // }) : <p>No Data Found</p> } */}
            </Modal>
        }
    </Container>
    // <Container>
    //     <InputLabel>
    //         Choose Student:
    //     </InputLabel>
    //     <Controller 
    //         name='student_name' 
    //         control={control} 
    //         defaultValue='' 
    //         render={() => (
    //             <>
    //                 <Select 
    //                     name='StudentName' 
    //                     sx={{width: '35ch', height: '50px'}} 
    //                     value={conValue} 
    //                     onChange={handleStudentChange}>
    //                     {chooseStudent.map((item, index) => {
    //                         let fName = item.student_fname;
    //                         let lName = item.student_lname;
    //                         let studentName = `${fName}` + ` ` + `${lName}`

    //                         return(
    //                             <MenuItem key={index} 
    //                                 value={item.student_id} 
    //                                 onclick={() => handleContact()}>
    //                                     {studentName}
    //                             </MenuItem>
    //                         )
    //                     })}
    //                 </Select>
    //                 {show && 
    //                     <div>
    //                         {!contact ? 
    //                             <p>No Info found</p> : 
    //                             contact.map((item) => {
    //                                 return(
    //                                     <div key={item.id} 
    //                                         value={item.id}>
    //                                         <p>
    //                                             Email: {item.email}
    //                                         </p>
    //                                         <p>
    //                                             Relation: {item.family_rel}
    //                                         </p>
    //                                     </div>
    //                                 )
    //                             })
    //                         }
    //                     </div>
    //                 }
    //             </>
    //         )} />
    // </Container>
  )
}

export default ParentsInfo