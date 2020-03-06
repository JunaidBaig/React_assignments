import React , {useState} from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {
    const [formState, setFormState] = useState("")

    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState("")
    }
    return(
        <div>
            <Navbar formState={formState}/>
            <FormWrapper changeHandler={setFormState} submit={onSubmitHandler} formState={formState}/>
        </div>
    )
}
export default Wrapper;