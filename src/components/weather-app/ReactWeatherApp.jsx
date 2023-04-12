import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: lightblue;
    margin: 1%;
`
//=New%20York

const ReactWeatherApp = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])
    const [location, setLocation] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
    
            await fetch(`https://api.weatherapi.com/v1/current.json?key= http://api.weatherapi.com/v1&q=London&aqi=no`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result)
            })
            // console.log("Latitude is: ", lat);
            // console.log("Longitude is: ", long)
        } 
        fetchData();
    }, [lat, long])

  return (
    <Container>
        
    </Container>
  )
}

export default ReactWeatherApp