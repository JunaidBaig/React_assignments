import React from 'react';
import Form from './Form';

const FormWrapper = ({changeHandler, submit, formState}) => {
    return(
        <div>
            <Form changeHandler={changeHandler} submit={submit} formState={formState}/>
        </div>
    )
}
export default FormWrapper;