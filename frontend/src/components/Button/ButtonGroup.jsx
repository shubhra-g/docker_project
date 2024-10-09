import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterJobs } from "../../redux/reducers/jobReducers";

function ButtonGroup() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center mb-3">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
          
            type="button"
            className="rounded-l inline-block px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-black  active:text-white transition duration-150 ease-in-out"
          >
           All Jobs
          </button>
          <button
          onClick={() => dispatch(filterJobs("entry"))}
            type="button"
            className="inline-block px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-black  active:text-white transition duration-150 ease-in-out"
          >
            Remote / Entry Role
          </button>
          <button
          onClick={() => dispatch(filterJobs("entry"))}
            type="button"
            className="rounded-r inline-block px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-black  active:text-white transition duration-150 ease-in-out"
          >
            
            Internship
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
