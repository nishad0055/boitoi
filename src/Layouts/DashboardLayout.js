import React, { useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Navbar from '../SharedPages/Navbar/Navbar';
import useAdmin from '../useAdmin/useAdmin';
import useSeller from '../useSeller/useSeller';
import useUser from '../useUser/useUser';

const DashboardLayout = () => {
    const {user , loading} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isUser] = useUser(user?.email)
    if(loading) {
        <div class="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                   <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                     {
                        isUser &&
                        <li> <Link to ='/dashboard/myorder' >My Order</Link></li>
                     }

                        
                           {
                            isSeller && 
                            <>
                              <li> <Link to ='/dashboard/seller/product' >Added Product List</Link></li>
                              <li> <Link to ='dashboard/add-product' >Add Product</Link></li>
                            </>
                           }
                        
                       
                       {
                        isAdmin &&
                         <>
                        <li> <Link to ='/dashboard/allusers' >ALl Users</Link></li>
                        <li> <Link to ='/dashboard/sellers' >All Sellers</Link></li>
                        <li> <Link to ='dashboard/add-product' >Add Product</Link></li>
                        <li> <Link to ='/dashboard/reported-product' >Reported Product</Link></li>
                       
                         </>
                       }
                        
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;