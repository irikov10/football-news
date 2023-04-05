import { useState } from 'react'

export const useForm = (initialValues, onSubmitHandler) => {
    console.log(onSubmitHandler)

    //state for the values
    const [values, setValues] = useState(initialValues);

    //change the value 
    const changeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (typeof onSubmitHandler === 'function') {
            onSubmitHandler(values);
            setValues(initialValues);
        } else {
            console.error('onSubmitHandler is not a function');
        }
    }

    const valuesChange = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        valuesChange,
    }
}





