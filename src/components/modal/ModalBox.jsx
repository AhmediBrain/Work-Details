import React from 'react'
import styled from 'styled-components'
import './modal.css'

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 1000px;
    min-height: 300px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35)
`
const CancelBtn = styled.button`
    width: 100px;
    padding: 5px;
    background-color: cornflowerblue;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`

const ModalBox = ({ closeModal }) => {
  return (
    <Background>
        <Container>
            <div>
                <h3>Title</h3>
            </div>
            <div>
                Body
            </div>
            <div>
                <CancelBtn 
                    onClick={() => closeModal(false)}> 
                    Cancel
                </CancelBtn>
            </div>
        </Container>
    </Background>
  )
}

export default ModalBox