import React from "react";
import { Link } from "react-router-dom";

function Button({action, onClick}) {
  return (
    <div>
        <button onClick={onClick} className="px-4 sm:px-8 py-2 bg-yellow ml-5 rounded outline-2 font-bold hover:bg-black hover:text-white">
          {action}
        </button>
    </div>
  );
}

export default Button;
