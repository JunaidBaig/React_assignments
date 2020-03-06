import React from 'react'

const Form = ({changeHandler, submit, formState}) => {
    return(
        <div>
            <form onSubmit={submit} className="form-group">
                <input type="text" name="list" value={formState} onChange={changeHandler} />
                <button type="submit" className="btn btn-success"> Add</button>
            </form>
        </div>
    )
}
export default Form;