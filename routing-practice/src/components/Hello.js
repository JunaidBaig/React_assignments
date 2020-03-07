import React from 'react'

const Hello = ({id}) => {
    if(isNaN(id)){
        return (<h1>The word is: {id}</h1>)
    }
    else{
        return (<h1>The number is: {id}</h1>)
    }
}
export default Hello;