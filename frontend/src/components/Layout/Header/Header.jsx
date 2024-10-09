import React from "react";
import { ImLocation } from "react-icons/im";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { GiPadlock, GiNigeria } from "react-icons/gi";
import {HiOutlineUserCircle} from 'react-icons/hi'
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  const Icons = [
    { icon: <BsWhatsapp />, link: "#" },
    { icon: <BsInstagram />, link: "#" },
    { icon: <RiMessengerLine />, link: "#" },
    { icon: <AiOutlineMail />, link: "#" },
    { icon: <FiTwitter />, link: "#" },
  ];

  const token = localStorage.getItem("token");

  return (
    <div>
      {/* Top Header Starts Here */}
      <div
        className="hidden sm:flex justify-between h-10"
        style={styles.container}
      >
        <div className="left flex">
          <ImLocation size={15} />
          <span className="ml-2 text-sm"> Your Location: Nigeria </span>

          <div className="ml-5 flex">
            {Icons.map((item, index) => (
              <Link to={item.link} key={index} className="mr-5">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="right flex ">
          {token === undefined || token === null ? (
            <div className= "">
              <Link to="/login" className="mr-2 flex">
                <GiPadlock />
                <span className="mr-10 ml-3">Login</span>
              </Link>
            </div>
          ) : (
            <div className= "right flex">
              <Link to="/" className="mr-2 flex ">
                <HiOutlineUserCircle />
                <span className="mr-10 ml-3">Dashboard</span>
              </Link>
            </div>
          )}
          <GiNigeria size={30} color="green" />
          <div></div>
        </div>
      </div>

      {/* Top Header Ends Here */}

      {/*Navigation Starts Here */}
      <Navigation />
      {/* <SideBarMobile /> */}
      {/*Navigation Ends Here */}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#F8F9FC",
    alignItems: "center",
  },
};
export default Header;
