import React from 'react';

const Form = ({changeHandler, submit, formState}) => {
    return(
        <div>
            <form onSubmit={submit} className="form-group">
                Your Name :<input type="text" value={formState} onChange={e => changeHandler(e.target.value)}/>
                <button type="submit" className="btn btn-secondary">Click</button>
            </form>
        </div>
    )
}
export default Form;