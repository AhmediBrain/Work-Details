import React from 'react'
import { useState } from 'react'
import Fillup from './Fillup'
import FormSuccess from './FormSuccess';

const Form = () => {
  const [issubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <div style={{margin: "20px"}}>
        <h3>Student Transfer Hand-Off Form</h3>
      </div>
        {!issubmitted ? (<Fillup submitForm={submitForm} />) : (<FormSuccess />)}
    </div>
  )
}

export default Form