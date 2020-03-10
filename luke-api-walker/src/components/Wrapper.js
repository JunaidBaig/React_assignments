import React, { useState, useEffect } from 'react';
import {Router, navigate} from '@reach/router'

import axios from 'axios';
import Search from './Search';
import Show from './Show';
// import {Router} from '@reach/router'


const Wrapper = () => {

    const [people, setPeople] = useState({
        id:"",
        name:""
    })
    const [listState, setListState]= useState([])
    const [submitState, setSubmitState] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.co/api/${people.name}/${people.id}`)
            .then(response=>{
                setListState(response.data)
            })
    }, [submitState]);

    // const onChangeHandler = (event) => {
    //     setPeople({
    //         ...people,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSubmitState(!submitState)
        setPeople({
            id: event.target.id.value,
            name: event.target.name.value,
        })
        navigate(`/${event.target.name.value}/${event.target.id.value}`)
        
    }
 
    return (
        <div>
            <Search submit={onSubmitHandler}/>
            <Router>
                <Show path='/:name/:id' submitState={submitState} listState={listState} setListState={setListState}/>
            </Router>
        </div>
    );
}
export default Wrapper;