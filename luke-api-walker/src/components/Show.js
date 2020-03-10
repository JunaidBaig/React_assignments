import React from 'react'


const Show = ({listState, name}) => {
    // console.log("NAME AND ID: ", name, id)
    
    return(
        <div>
            <h1>{listState.name}</h1>
            {name === 'people' ? <p><h3>Height:{listState.height}</h3>
            <h3>Hair Color:{listState.hair_color}</h3>
            <h3>Skin Color: {listState.skin_color}</h3></p>:
            <p><h3>Climate:{listState.climate}</h3>
            <h3>Terrain: {listState.terrain}</h3>
            <h3>Surface Water: {listState.surface_water}</h3>
            <h3>Population: {listState.population}</h3></p>
    }
        </div>
    )
}

export default Show;