import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    margin: auto;
    padding: 10px;
    background-color: #94BCFC;
`

const MultipleApi = () => {
    const [playerName, setPlayerName] = useState([])
    const [playerTeam, setPlayerTeam] = useState([])
    const [firstName, setFirstName] = useState('')

    const playerInformation = () => {
        const playerAPI = 'https://www.balldontlie.io/api/v1/players'
        const teamAPI = 'https://www.balldontlie.io/api/v1/teams'

        const getNBAPlayer = axios.get(playerAPI)
        const getNBATeam = axios.get(teamAPI)
        axios.all([getNBAPlayer, getNBATeam]).then(
            axios.spread((...allData) => {
                const allNBAPlayer = allData[5].data.first_name
                const allNBATeam = allData[1]

                setPlayerName(allNBAPlayer)
                console.log(allNBAPlayer)
                console.log(allNBATeam)
            })
        )
    }

    useEffect(() => {
        playerInformation()
    }, [firstName])

  return (
    <Container>
        <h3>NBA Player Information</h3>
        <input 
            type='text' 
            placeholder='Search...' 
            style={{width: '200px', border: 'none', outline: 'none', padding: '5px'}} />
        <div>
            {playerName.map((user) => {
                return(
                    <p>player{user}</p>
                )
            })}
        </div>
    </Container>
  )
}

export default MultipleApi