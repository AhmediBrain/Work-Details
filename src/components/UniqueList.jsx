import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
    display: flex;
`


const users = [
    {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        phones: [
            {
                home: '2121545326'
            },
            {
                work: '8721245995'
            }
        ]
    },
    {
        title: 'Fairy Tales',
        author: 'Christian Andersen',
        phones: [
            {
                home: '5498215496'
            },
            {
                work: '8486229568'
            }
        ]
    },
    {
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        phones: [
            {
                home: '2625454884'
            },
            {
                work: '6598932842'
            }
        ]
    },
    {
        title: 'The Epic of Gilgamesh',
        author: 'Robert Lewandaski',
        phones: [
            {
                home: '5147723265'
            },
            {
                work: '2215454966'
            }
        ]
    },
    {
        title: 'The Book of Job',
        author: 'Earling Haaland',
        phones: [
            {
                home: '2356548484'
            },
            {
                work: '3232545485'
            }
        ]
    }
]

const UniqueList = () => {
    console.log(uuidv4())
  return (
    <Container>
        {/* {todos.map((todo) => {
            return(
                <div key={uuidv4()}>
                    <h5>{todo.title}</h5>
                    <p>{todo.author}</p>
                </div>
            )
        })} */}

        {users.map((user, index) => {
            return(
                <article key={index}>
                    <h5>{user.author}</h5>
                    <p>{user.title}</p>
                    {user.phones.map((phone, index) => {
                        return(
                            <div key={index}>
                                <p>{phone.home}</p>
                                <p>{phone.work}</p>
                            </div>
                        )
                    })}
                </article>
            )
        })}
    </Container>
  )
}

export default UniqueList