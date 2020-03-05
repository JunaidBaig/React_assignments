import React, {useState} from 'react'
import Form from './Form';
import Show from './Show';



const FormWrapper = () => {
    const [formState, setFormState] = useState({
        height: "200",
        width: "200",
        color: ""
    })
    const [boxState, setBoxState] = useState([])
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log("Form Submitted")
        setBoxState([
            ...boxState,
            [formState]
        ])
        setFormState({
            height: "200",
            width: "200",
            color: ""
        })
    }
    return(
        <div>
            <Form boxMaker={setBoxState} formState={formState} changeHandler={onChangeHandler} submit={onSubmitHandler}/>
            <Show boxState={boxState} name={formState} />
        </div>
    )
}

export default FormWrapper;