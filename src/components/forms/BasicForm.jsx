import React from "react";

const BasicForm = () => {
  
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Basic Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            name="firstName"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Middle Name"
            name="middleName"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            name="lastName"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicForm;