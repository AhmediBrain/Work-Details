import { useState } from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...value,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
    }

    return(
        {handleChange, values, errors, handleSubmit}
    )
}

export default useForm;