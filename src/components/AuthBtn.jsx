import React from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../utils/Util";
import {CiUser} from 'react-icons/ci'
const AuthBtn = () => {
  const data = JSON.parse(localStorage.getItem("User"));

  const logOut = () => {
    localStorage.removeItem('User');
    window.location.reload();
  };

  const auth = () => {
    if (authUser()) {
      return (
        <div className="dropdown">
          <button
            className="user-btn dropdown-toggle themeMode"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <span className="px-2"><CiUser/></span>{data.userName}
          </button>
          <ul className="dropdown-menu ">
            <li className='drop-item'>
            <NavLink to='/admin'><a className="dropdown-item" href="#">Dashboard</a></NavLink>
            </li>
            <li onClick={logOut}><NavLink>Log Out</NavLink> </li>
          </ul>
        </div>
      );
    } else {
      return <NavLink to="/login"> <CiUser/></NavLink>;
    }
  };

  return <>{auth()}</>;
};

export default AuthBtn;
