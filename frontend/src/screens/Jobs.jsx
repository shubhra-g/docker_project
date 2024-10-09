import React,{useEffect, useState} from 'react'
import { jobFetch } from '../redux/reducers/jobReducers'
import { useDispatch, useSelector } from 'react-redux'
import EachJob from '../components/Layout/Jobs/EachJob'
import CategoryHeader from '../components/Category/CategoryHeader'
import Spinner from '../components/Spinner/Spinner'
import { Failed } from '../components/Category/Alerts/Alerts'
import ButtonGroup from '../components/Button/ButtonGroup'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'


function Jobs() {

    const dispatch = useDispatch()
    const {jobs, loading,error} = useSelector(state => state.job)

    useEffect(() => {
        dispatch(jobFetch())
    } , [])
  
    return (
    <div>
        <Header />
               {loading && (<Spinner />)}
        <CategoryHeader categoryName="New & Latest Jobs" description=" Latest Job Postings From Companies and Organizations in Germany, UK, and other European countries." />
        {error && (<Failed  message={`${error}. Please Check Your Network Connectivity and Try Again`}/>)}

        <ButtonGroup />
        
        {jobs.map((job, index) => (
            <EachJob key={index} title={job.title} company={job.company_name} location={job.location} tags={job.tags} apply="View" slug={job.slug} date={job.created_at} />
        ))}

        <Footer />
    </div>
  )
}

export default Jobs
