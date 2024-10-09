import React,{useEffect, useState} from 'react'
import Hero from '../components/Layout/Hero/Hero'
import Category from '../components/Category/Category'
import Jobs from '../components/Layout/Jobs/Jobs'
import {useSelector, useDispatch} from 'react-redux'
import {fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure, filterJobs,} from '../redux/reducers/jobReducers'
import {jobFetch} from '../redux/reducers/jobReducers'
import Spinner from '../components/Spinner/Spinner'

function Home() {

  const dispatch = useDispatch()
  const jobs = useSelector(state => state.job.jobs)

  useEffect(() => {
    dispatch(jobFetch())

  }, [])

  return (
    <div>
      <Hero />
      <Category />
      <Jobs jobs={jobs}/>
    </div>
  )
}

export default Home