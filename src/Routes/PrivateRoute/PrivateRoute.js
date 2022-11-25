import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div class="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    }

   
    if(user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>


};

export default PrivateRoute;