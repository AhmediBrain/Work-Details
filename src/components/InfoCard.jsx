import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 3%;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    border: solid 1px #7d9faa;
    border-radius: 8px;
    padding: 5px;
`

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const InfoCard = (props) => {
    //Destructuring
    const {titleText, description} = props;
    console.log(props)
  return (
    <Container>
        <Card>
            <h3>{titleText}</h3>
            <p>{description}</p>
            <span>{monthName + '/' + dateName + '/' + currentYear}</span>
        </Card>
    </Container>
  )
}

export default InfoCard