import React from "react";

const ContactForm = () => {

  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Contact Form</div>
      <div className="card-body">
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Enter Your Phone Number"
            name="phone"
          />
        </div>
        <div className="form-group">
          <input 
          type="text"
            className="form-control"
            placeholder="Enter Your Alternate Phone Number"
            name="alternate_phone"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;