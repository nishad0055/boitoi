import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='my-24 container mx-auto text-center' >
            <h2>Page Not Found</h2>
            <h2>{error.status} </h2>
             <Link to='/' className='btn btn-warning' >Back to home </Link>
        </div>
    );
};

export default ErrorPage;