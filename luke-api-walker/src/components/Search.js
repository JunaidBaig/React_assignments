import React from 'react'

const Search = ({submit, changeHandler}) => {
    return(
        <div>
            <form onSubmit={submit} className="form-group">
                Search for:
                <select className="dropdown" name="name">
                <option value="people">Select:</option>
                <option className="dropdown-item" value="people">people</option>
                <option className="dropdown-item" value="planets">planets</option>
                </select>
                ID:<input type="text" name="id" />
                <button type="submit" className="btn btn-secondary">Search</button>
            </form>
        </div>
    )
}
export default Search;