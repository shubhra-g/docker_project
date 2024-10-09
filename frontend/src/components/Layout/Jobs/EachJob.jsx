import React,{useState} from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiStarFormation } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { SweetAlert } from "../../../helpers/SweetAlert";
import {BsArrowDownCircleFill} from "react-icons/bs"

function EachJob({ title, company, location, tags, apply, slug, date, link }) {
  const [showLink, setShowLink] = useState(false)


  const navigate = useNavigate();
  function truncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  // console.log(link, "THE LINK ")

  const token = localStorage.getItem("token");
  //Conversion from Unix utc to local time
  const localTime = new Date(date * 1000).toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
  });

  console.log(link, "The Link");

  //Web Application Redirection
  const applyJob = (link) => {
    //Checking if User Is Logged In
    if (token === undefined || token === null) {
      SweetAlert("error", "Please Login To Continue With Your Application");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    SweetAlert(
      "success",
      "You Will Be Redirected To Our Partner Website To Complete Your Application"
    );

    setTimeout(() => {
      setShowLink(true)
    }, 2000)
  };

  return (
    <div className="grid md:flex justify-between  bg-primary items-center my-10 rounded-lg mx-5 p-5 border-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow duration-300">
      <div className="grid">
        <div className="flex">
          <GiStarFormation />
          <h3 className="px-5 text-center text-xl font-bold">
            {truncate(title, 50, "...")}
          </h3>
        </div>

        <div className="flex">
          <FaSuitcase />
          <p className="px-5 text-center text-md">{company}</p>
        </div>

        <div className="flex">
          <IoLocationSharp />
          <p className="px-5 text-center text-md">{location}</p>
        </div>
      </div>

      {/* {tags? tags.map((tag, index) => (
        <div className="my-2 grid">
          <button className="bg-black text-white px-4 rounded-lg">
            {truncate(tag, 15, "...")}
          </button>
        </div>
      )) : ""} */}

      <div>
        {apply === "View" ? (
          // <navigate to={`/job/${slug}`}>
          <div className="my-2">
            <button
              onClick={(e) => navigate(`/job/${slug}`)}
              className="bg-yellow hover:bg-black text-white px-5 py-2 rounded-lg font-extrabold"
            >
              {apply}
            </button>
            <div className="mt-5 font-bold text-md ">
              <p>Posted: {localTime}</p>
            </div>
          </div>
        ) : (
          // <Link to={`/job/${slug}/apply`}>
          //  <a href={link}>
          <div className="grid">
            <button
              onClick={applyJob}
              className="bg-yellow hover:bg-black text-white px-5 py-2 rounded-lg font-extrabold"
            >
              {apply}
            </button>

            {showLink &&  (
                          <div className="flex flex-col justify-center items-center mt-5" onClick={(e) => setShowLink(false)}>
                          <BsArrowDownCircleFill size={20} color="black" className="flex justify-center items-start mb-3" />
                          <span >
                          <a href={link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white text-xl"> <span >Link To Application</span> </a>
                          </span>
                        </div>
            )}
          </div>
          // </a>
        )}
      </div>
    </div>
  );
}

export default EachJob;
