import React from "react";
import CategoryHeader from "../../Category/CategoryHeader";
import EachJob from "./EachJob";
import Button from "../../Button/Button";
import {Link} from 'react-router-dom'
import ButtonGroup from "../../Button/ButtonGroup";
import Spinner from "../../Spinner/Spinner";
import {useSelector} from 'react-redux'
import { Failed } from "../../Category/Alerts/Alerts";

function Jobs({jobs}) {


  const {loading, error} = useSelector(state => state.job)
  return (
    <div className="my-10" style={{ backgroundColor: "#F8F9FC" }}>
      <div>
        <CategoryHeader
          categoryName="New & Latest Jobs"
          description=" Latest Job Postings From Companies and 
        Organizations in Germany, UK, and other European countries."
        />
      </div>

      <div>
            <ButtonGroup />
        </div>
      <div>
        {loading && <Spinner />}
        {error === true ? <Failed message={`${error}. Please Check Your Network Connectivity and Try Again`} /> :
        
        jobs.slice(0, 15).map((job, index) => (
          <EachJob key={index} title={job.title} company={job.company_name} location={job.location} tags={job.tags} apply="View" date={job.created_at} slug={job.slug} link={job.url} />
          ))
        }
      </div>

      <div className="flex justify-center items-center mt-20">
        <Link to="/jobs"><Button action="View More Jobs" link="/jobs" /></Link>
      </div>
    </div>
  );
}

export default Jobs;
