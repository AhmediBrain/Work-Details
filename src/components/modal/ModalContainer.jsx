import React, { useState } from 'react'
import styled from 'styled-components'
import ModalBox from './ModalBox'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const OpenBtn = styled.button`
    background-color: lightgray;
    width: 100px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 25px;
    cursor: pointer;
`

const ModalContainer = () => {
    const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
        <h3>Click the Button to open the Modal</h3>
        <OpenBtn 
            onClick={() => setOpenModal(true)}>
            Open
        </OpenBtn>
        {openModal && <ModalBox closeModal={setOpenModal} />}
    </Container>
  )
}

export default ModalContainer