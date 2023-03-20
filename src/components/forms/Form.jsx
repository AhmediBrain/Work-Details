import React from "react";
import AddressForm from "./AddressForm";
import BasicForm from './BasicForm';
import ContactForm from './ContactForm'


const Form = () => {

  return (
    <form onSubmit={handleSubmit}>
      <BasicForm />
      <AddressForm />
      <ContactForm />
      <button 
        className="btn btn-primary" 
        type="submit">
        Create New Account
      </button>
    </form>
  );
};

export default Form;