import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {

    const menuItem = (
        <>
         <li> <Link to='/' >Home</Link> </li>
         <li> <Link to='/' >All Books</Link> </li>
         <li> <Link to='/login' >Login</Link> </li>
         
        </>
    )

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FiMenu size={30} />
            </label>
            <ul
              tabIndex={0}
           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-serif">
               {
                menuItem
               }
               
            </ul>
          </div>
          <Link  to='/' className="btn btn-ghost normal-case text-2xl font-serif font-bold">BookBite</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl uppercase font-serif">
            {menuItem}
        
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-warning text-white md:text-lg font-serif">Sell Books +</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
