import React from 'react'

const Show = ({boxState}) => {
    
    
    let result='';
    for(let i=0; i<boxState.length; i++){
        console.log(boxState[i])
        // <h1>{result}</h1>
        const Mystyle = {
            backgroundColor: boxState[i][0].color,
            width: boxState[i][0].width+"px",
            height: boxState[i][0].height+"px",
            margin: "20px",
            display: "inline-block"
        }
        result= <>{result}<div style={Mystyle}></div></>
    }
    return(
        <>{result}</>
    )
}
export default Show;