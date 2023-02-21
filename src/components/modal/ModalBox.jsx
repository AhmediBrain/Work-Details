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

const ModalBox = ({ closeModal }) => {
  return (
    <Background>
        <div className='modalContainer'>
            <div>
                <h3>Title</h3>
            </div>
            <div className='body'>
                Body
            </div>
            <div>
                <button 
                    onClick={() => closeModal(false)}> 
                    Cancel
                </button>
            </div>
        </div>
    </Background>
  )
}

export default ModalBox