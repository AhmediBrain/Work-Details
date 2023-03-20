import React from "react";
import styled from "styled-components";
import useForm from "./useForm";
import validate from "./ValidInfo";

const Small = styled.p`
  font-size: 12px;
  color: red;
`

const BasicForm = () => {
  const { handleSubmit, handleChange, values, errors } = useForm(validate)
  console.log(values)
  
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Personal Information</div>
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              name="firstName" 
              value={values.firstName} 
              onChange={handleChange}/>
              {errors.firstName && <Small>{errors.firstName}</Small>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Middle Name"
              name="middleName" 
              value={values.middleName} 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              name="lastName" 
              value={values.lastName} 
              onChange={handleChange} />
              {errors.lastName && <Small>{errors.lastName}</Small>}
          </div>
          <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            name="email" 
            value={values.email} 
            onChange={handleChange} />
            {errors.email && <Small>{errors.email}</Small>}
          </div>
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone" 
              value={values.phone} 
              onChange={handleChange} />
              {errors.phone && <Small>{errors.phone}</Small>}
          </div>
          <div className="form-group">
            <input 
            type="text"
              className="form-control"
              placeholder="Enter Your Alternate Phone Number"
              name="alternate_phone" />
          </div>
        </div>
        <button 
          type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default BasicForm;