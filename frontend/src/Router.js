import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout/Layout'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import JobDescription from './screens/JobDescription'
import Login from './screens/Login'
import Jobs from './screens/Jobs'
import Register from './screens/Register'
import NotFound from './screens/NotFound'
import DashBoard from './screens/DashBoard'
import Verification from './screens/Verification'
import Services from './screens/Services'
import Employee from './screens/Employee'
import Candidate from './screens/Candidate'

function Router() {

  return (
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/about" element={<Layout> <About /> </Layout>} />
        <Route path="/contact" element={<Layout> <Contact /> </Layout>} />
        <Route path="/job/:slug" element={<Layout> <JobDescription /> </Layout>} />
        <Route path="/login" element={<Layout> <Login /> </Layout>} />
        <Route path="/jobs" element={ <Jobs /> } />
        <Route path="/register" element={<Layout> <Register /> </Layout>} />
        <Route path="*" element={<Layout> <NotFound /> </Layout>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/auth/verify/:uniqueString" element={<Layout><Verification /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/employee" element={<Layout><Employee /></Layout>} />
        <Route path="/candidates" element={<Layout><Candidate /></Layout>} />
      </Routes>
  )
}

export default Router