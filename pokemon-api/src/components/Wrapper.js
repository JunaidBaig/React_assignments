import React, {useState} from 'react'
import Show from './Show';

const Wrapper = () => {

    const [formState, setFormState] = useState([])

    const onSubmitHandler = event =>{
        event.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
          return response.json();
        }).then(response => {
            setFormState(response.results)
            console.log(response.results);
        }).catch(err=>{
            console.log(err);
        });
        
    console.log(formState)
    }
    return (
        <div>
        <button onClick={onSubmitHandler}>Fetch Pokemon</button>
        <h1>Pokemon</h1>
        <Show formState={formState}/>
        </div>
    )
}
export default Wrapper;