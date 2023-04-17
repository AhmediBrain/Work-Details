import { InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { searchData } from '../search/searchData'
import InfoCard from './InfoCard'
import Data from '../infoData.json'

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

const ParentsInfo = () => {
    let items = Data.map((item, index) => <InfoCard key={index} titleText={item.author} description={item.year} />)
    // for(let x=0; x<Data.length; x++) {
    //     items.push(<InfoCard titleText={Data[x].title} description={Data[x].language} />)
    // }
    const [conValue, setConValue] = useState('')
    console.log(conValue)
    const [show, setShow] = useState(false)
    const title = searchData.map((user) => (
        <span key={user.id} 
            value={user.id}>
            {user.title}
        </span>
    ))

    const data = searchData.map((item) => (
        <span key={item.id} 
            value={item.id}>
                {item.info}
        </span>        
    ));

    console.log(data)    

    const handleStudentChange = (e) => {
        setConValue(e.target.value);
    }

    const handleContact = () => {
        setShow(true)
    }


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
            </Modal>
        }
        <div>
            <InfoCard titleText="The Family" description='Description about the Family' />
            <InfoCard titleText="The Friends" description='Description about the Friends' />
            <InfoCard titleText="Lorem Ipsum" description="Lorem ipsum dolor amet lorem et stet dolor ipsum accusam labore." />
        </div>
        <div>
            {items}
        </div>
    </Container>
    
  )
}

export default ParentsInfo