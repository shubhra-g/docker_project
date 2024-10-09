import React from "react";
import Logo from "../../../assets/logo-dark.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotifications } from "react-icons/md";
import Avatar from "../../Avatar/Avatar";
import { SweetAlert } from "../../../helpers/SweetAlert";
import { motion } from "framer-motion";

function Navigation() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token, "The local storage");

  const NavItem = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
    { name: "Employee", link: "employee" },
    { name: "Candidates", link: "candidates" },
  ];

  return (
    <div className="flex justify-between items-center h-20 drop-shadow-2xl">

      <div className="hidden md:flex">
        <Link to ="/"><img src={Logo} alt="Jobcy Logo" /> </Link>
      </div>


             {/* Mobile Navigation responsiveness */}
             <div className="flex dropdown md:hidden z-50 shadow-xl" >
        <span>
          <GiHamburgerMenu size={40} tabIndex={0} className="m-1" />
        </span>
        <ul
          tabIndex={0}
          className="dropdown-content cursor-pointer menu p-2 shadow bg-black rounded-box w-52"
          style={{zIndex: 999}}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Candidate</a>
          </li>
          <li>
            <a>Employee</a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex ">
        {NavItem.map((item, index) => (
          <ul>
            <li
              className="mr-7 hover:underline color:yelow hover:underline-offset-8"
              key={index}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          </ul>
        ))}
      </div>

      {token === undefined || token === null ? (
        <div className=" hidden md:flex">
          <Link to="/login">
            <Button action="Login" />
          </Link>
          <Link to="/register">
            <Button action="Sign Up" />
          </Link>
        </div>
      ) : (
        <>
          <div className=" hidden md:flex justify-center Items-center cursor-pointer">
            <div tabIndex={0} className="dropdown dropdown-left">
              <span onClick={<Avatar />} className="mr-20">
                <MdNotifications size={40} color="red" />
              </span>
              <div>
                <p
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  No Notification
                </p>
              </div>
            </div>
            <Avatar />
          </div>
        </>
      )}


      <div>
      {token === undefined || token === null ? (
        <div className=" flex md:hidden">
          <Link to="/login">
            <Button action="Login" />
          </Link>
          <Link to="/register">
            <Button action="Sign Up" />
          </Link>
        </div>
      ) : (
        <>
          <div className=" flex md:hidden justify-center Items-center cursor-pointer">
            <div tabIndex={0} className="dropdown dropdown">
              <span onClick={<Avatar />} className="mr-20">
                <MdNotifications size={40} color="red" />
              </span>
              <div>
                <p
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto font-bold text-md"
                >
                  No Notification
                </p>
              </div>
            </div>
            <Avatar />
          </div>
        </>
      )}
      </div>
      


    </div>
  );
}

export default Navigation;
