import React from "react";
// import { motion } from "framer-motion"

function CategoryHeader({categoryName, description}) {
  return (
    <div>

      <div className="flex mt-10 justify-center items-center text-center">
        <div>
          <h1 className="text-4xl my-5  md:text-5xl font-bold text-center">
            {categoryName}
          </h1>
          <p className="my-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;
