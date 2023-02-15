import React from "react";

const AddressForm = () => {
  
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Address Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your City"
            name="city"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Zipcode"
            name="zipcode"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Village"
            name="village"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;