import React from 'react';
import {Link} from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div>
            <div>Error page</div>
            <div><Link to={'/'}>move ahead</Link></div>
        </div>
    );
};
