import React, {useState} from 'react'
import Form from './Form'
import Show from './Show'

const FormWrapper = () => {
    const [formState, setFormState] = useState("")
    const [listState, setListState] = useState([])

    const onChangeHandler = event => {
        setFormState(event.target.value)
    }

    const handleDelete = index => {
        var arr = listState.filter((item, i) => i != index)
        setListState(arr)

    }
    

    const onSubmitHandler = event => {
        event.preventDefault();
        setListState([
            ...listState,
            [formState]
        ])
        setFormState("")
    }
    return(
        <div className="container">
            <Form changeHandler={onChangeHandler} submit={onSubmitHandler} formState={formState}/>
            <Show deleteHandler={handleDelete} listState={listState} name={setListState}/>
        </div>
    )
}
export default FormWrapper;