import React from 'react'

const Show = ({formState}) => {
    return(
        <div>
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
export default Show;