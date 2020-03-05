import React from 'react'

const Form = ({boxMaker,changeHandler, submit, formState}) => {
    return (
        <form onSubmit={submit}>
            <p>Color<input  value={formState.color} type="text" name="color" onChange={changeHandler}/></p>
            <p>Height<input value={formState.height} type="number" name="height" onChange={changeHandler}/></p>
            <p>Width<input value={formState.width} type="number" name="width" onChange={changeHandler}/></p>
            <button type="submit">Add</button>
            {/* {boxMaker.push({color: formState.color})} */}
        </form>
    )
}
export default Form;