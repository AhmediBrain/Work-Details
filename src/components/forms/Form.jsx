import React from "react";
import AddressForm from "./AddressForm";
import BasicForm from './BasicForm';
import ContactForm from './ContactForm'


const Form = () => {

  return (
    <form>
      <BasicForm />
      <AddressForm />
      <ContactForm />
      <button className="btn btn-primary">
        Create New Account
      </button>
    </form>
  );
};

export default Form;