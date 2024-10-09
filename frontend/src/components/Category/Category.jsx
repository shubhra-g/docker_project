import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import Button from "../Button/Button";
import CategoryHeader from "./CategoryHeader";
import {FaMoneyBillAlt} from 'react-icons/fa'
import {GiOpenBook} from 'react-icons/gi'
import {ImAirplane} from 'react-icons/im'
import {GiHealthCapsule} from 'react-icons/gi'
import {Link} from 'react-router-dom'


function Category() {
  return (
    <>
    <CategoryHeader categoryName="Browser Jobs Categories" description=" Search Job relevant to your skills, Expertness and growth.
            Apply and migrate to europe with Visa sponsored employment
            oppourtunities" />

      <EachCategory />

      <div className="flex justify-center items-center mt-20">
      <Link to="/jobs"><Button action="Browse All Categories"/></Link>
      </div>
    </>
  );
}

const category1 = [
  {
    category: "IT & Software",
    jobs: "2750 Jobs",
    icon: <GrCloudSoftware size={40} />,
  },
  {
    category: "Healthcare",
    jobs: "1460 Jobs",
    icon: <GiHealthCapsule size={40} />,
  },
  {
    category: "Finance",
    jobs: "6892 Jobs",
    icon: <FaMoneyBillAlt size={40} />,
  },
  {
    category: "Education",
    jobs: "7980 Jobs",
    icon: <GiOpenBook size={40} />,
  },
  {
    category: "Aviation",
    jobs: "1230 Jobs",
    icon: <ImAirplane size={40} />,
  },
  
];

const EachCategory = ({ category, jobs, icon }) => {
  return (
    <>
      <div className="grid md:flex  justify-center items-center mt-10">
        {category1.map((item, index) => (
          <div key={index} className="flex flex-col mb-10 justify-between items-center mx-10 hover:transition-all cursor-pointer">
            <div className="p-5 bg-yellow opacity-sm rounded-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mt-5 text-bold">
              {item.category}
            </h3>
            <p className="text-xl mt-3">{item.jobs} Jobs</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Category;
