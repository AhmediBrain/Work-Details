export default function ValidInfo(values) {
    let errors = {}

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!values.firstName.trim()) {
        errors.firstName = 'First Name is required'
    } 
    if(!values.lastName.trim()) {
        errors.lastName = 'Last Name is required'
    }
    if(values.email.test(validRegex)) {
        errors.email = 'Please enter a valid Email Address'
    }

    return errors;
}