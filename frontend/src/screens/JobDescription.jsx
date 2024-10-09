import React, { useEffect, useState, useMemo } from "react";
import EachJob from "../components/Layout/Jobs/EachJob";
import JobHeader from "../components/Layout/Header/JobHeader";
import Button from "../components/Button/Button";
import { useParams } from "react-router-dom";
import { jobFetch, findJobUsingSlug } from "../redux/reducers/jobReducers";
import { useDispatch, useSelector } from "react-redux";

function JobDescription() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const jobStates = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(jobFetch());
  }, []);
  

  if (jobStates.eachJob === null || jobStates.eachJob === undefined) {
    dispatch(findJobUsingSlug(slug));
    return;
  }
  // dispatch(findJobUsingSlug(slug))
  console.log(jobStates.eachJob, "Each Job");

  return (
    <>
      {jobStates.eachJob && (
        <div>
          <JobHeader />
          <EachJob
            title={jobStates.eachJob.title}
            company={jobStates.eachJob.company_name}
            location={jobStates.eachJob.location}
            tags="remote"
            apply="Apply"
            link = {jobStates.eachJob.url}
          />

          <div className="grid md:flex ">
            <div className="flex mr-10">
              <div
                className="text-justify mx5 mb-10 p-10"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
              >
                <h1 className="text-2xl font-bold">Job Description</h1>

                <div
                 dangerouslySetInnerHTML={{
                   __html: jobStates.eachJob.description,
                  }}
                />
              </div>
            </div>
          </div>

          <Button action="Apply Now" />

          <h1 className="text-2xl text-center font-bold">
            More Jobs In Germany
          </h1>
          {jobStates.jobs.slice(20, 30).map((job) => (
            <div className="">
              <EachJob
                title={job.title}
                company={job.company_name}
                location={job.location}
                slug={job.slug}
                date={job.created_at}
                apply="View"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default JobDescription;
