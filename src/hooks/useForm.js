import { useState } from 'react'

export const useForm = (initialValues, onSubmitHandler) => {


    //state for the values
    const [values, setValues] = useState(initialValues);

    //change the value 
    const changeHandler = (e) => {
        setValues((state) => ({...state, [e.target.name]: e.target.value}));
    }

    //
    const onSubmit = (e) => {
        e.preventDefault();
        
        onSubmitHandler(values);

        setValues(initialValues);
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