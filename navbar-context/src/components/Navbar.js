import React from 'react';

const Navbar = ({formState}) => {
    
    return(
        <div>
            <nav className="navbar">
                <h2>Hi {formState}!</h2>

            </nav>
        </div>
    )
}
export default Navbar;