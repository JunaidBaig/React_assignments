import React from 'react'

const Show = ({name}) => {
    console.log("STATE INSIDE SHOW COMP: ",name)
    return(
        <div>
            <p>First Name: {name.firstName}</p>
            <p>Last Name: {name.lastName}</p>
            <p>Email: {name.email}</p>
            <p>Password: {name.password}</p>
            <p>Confirm Password: {name.confirmPassword}</p>
        </div>
    )
}
export default Show;