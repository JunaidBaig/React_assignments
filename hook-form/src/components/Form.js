import React from "react";


const Form = ({changeHandler}) => {
    return(
        <div>
            <form>
                <p>First Name<input type="text" name="firstName" onChange={changeHandler}/></p>
                <p>Last Name<input type="text" name="lastName" onChange={changeHandler}/></p>
                <p>Email<input type="text" name="email" onChange={changeHandler}/></p>
                <p>Password<input type="password" name="password" onChange={changeHandler}/></p>
                <p>Confirm Password<input type="password" name="confirmPassword" onChange={changeHandler}/></p>
            </form>
        </div>
    )
}
export default Form;