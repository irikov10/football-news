import { useState } from 'react'

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        if (e.target) {
            setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
        }
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





