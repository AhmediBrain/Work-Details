export default function ValidInfo(values) {
    let errors = {}

    //let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!values.firstName.trim()) {
        errors.firstName = 'First Name is required'
    }
    if(!values.lastName.trim()) {
        errors.lastName = 'Last Name is required'
    }
    if(!values.email) {
        errors.email = 'Email Address is required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.phone) {
        errors.phone = 'Phone Number is required'
    }

    return errors;
}