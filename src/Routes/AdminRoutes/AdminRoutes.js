import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../useAdmin/useAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if(loading || isAdminLoading){
        return <div class="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    }

   
    if(user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>


};

export default AdminRoutes;