import React from 'react';
import { Link} from 'react-router-dom';

function pageNotFound() {
    return(
        <>
            <h2>Page Not Found</h2>
            <Link to='/'>Back to Home</Link>
        </>
    );
}

export default pageNotFound;
