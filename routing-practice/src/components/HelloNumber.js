import React from 'react'

const HelloNumber = ({str,color,colorText}) => {
    const myStyle = {
        backgroundColor: color,
        color: colorText
    }
    return(
        <div style={myStyle}>
            <h1>The word is:{str}</h1>
        </div>
    )
}
export default HelloNumber;