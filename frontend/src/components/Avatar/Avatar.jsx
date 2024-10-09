import React from "react";
import {Link} from 'react-router-dom'
import { SweetAlert } from "../../helpers/SweetAlert";
import {useNavigate} from 'react-router-dom'

function Avatar() {
  const navigate = useNavigate()
  const logOutHandler = (e) => {
    localStorage.removeItem("token");
    SweetAlert("success", "You are now logged out Successfully");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>

<div className="dropdown dropdown-end">
      <label tabindex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="User Avatae" />
        </div>
      </label>
      <div tabindex={0} className="grid mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 justify-center items-center rounded-box w-52">
        <li className="cursor-pointer hover:text-yellow font-bold py-2">Profile</li>
        <li className="cursor-pointer hover:text-yellow font-bold py-2">Settings</li>
        <li onClick={logOutHandler} className="cursor-pointer hover:text-yellow font-bold py-2">Logout</li>

      </div>
    </div>

    </div>
  );
}

export default Avatar;
