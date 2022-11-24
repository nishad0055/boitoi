import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {

    const menuItem = (
        <>
         <li> <Link to='/' >Home</Link> </li>
         <li> <Link to='/' >Engineering Books</Link> </li>
         <li> <Link to='/' >Medical</Link> </li>
         <li> <Link to='/' >Competitive Exams Books</Link> </li>
         <li> <Link to='/' >General Books</Link> </li>
         <li> <Link to='/' >Login</Link> </li>
         
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
           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               {
                menuItem
               }
               
            </ul>
          </div>
          <Link  to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
        
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost">Sell Books +</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
