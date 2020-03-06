import React, { useState } from 'react';
import axios from 'axios';

const Wrapper = () => {

    const [formState, setFormState] = useState([])

    const onSubmitHandler = event =>{
        event.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807')
            .then(response=>{setFormState(response.data.results)})
        }
        
    console.log(formState)
    return (
        <div>
        <button onClick={onSubmitHandler}>Fetch Pokemon</button>
        <h1>Pokemon</h1>
        <ul>
            {formState.map((items,i) => 
                <li key={i}>
                    {items.name}
                </li>
            )}
            </ul>
        </div>
    )
}
export default Wrapper;