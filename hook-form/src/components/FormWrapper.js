import React, {useState} from 'react'
import Form from './Form'
import Show from './Show'



const FormWrapper = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    return(
        <div>
            <Form changeHandler={onChangeHandler} />
            <Show name={formState} />
        </div>
    )
}
export default FormWrapper;