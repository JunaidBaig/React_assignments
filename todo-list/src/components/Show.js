import React from 'react'

const Show = ({listState,deleteHandler, completeHandle}) => {
    // const completeHandle = event => {
    //     const myStyle = {
    //         textDecorationLine: "line-through",
    //         textDecorationStyle: 'solid'
    //     }
        
    // }
    return(
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>To do List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {listState.map((item, i) =>
                <tr key={i}>
                    <th className="myStyle" >
                        {item}
                    </th>
                    <td>
                        <button type="submit" className="btn btn-success" >Complete </button>
                        <button type="submit" onClick={() => deleteHandler(i)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Show;