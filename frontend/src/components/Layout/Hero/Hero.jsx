import React from 'react'
import BgImage from '../../../assets/process-02.png'
import Button from '../../Button/Button'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="grid md:flex wrap justify-between items-center h-auto md:h-screen" style={styles.hero}>
        <div className = "right text-center ">
        <marquee behavior="scroll" direction="left" className="text-xl font-bold pt:10 hidden md:flex">All Job Posting and Descriptions are written in German. Ensure to translate them to English</marquee>
            <p className="font-bold size-lg pt-10  ">OVER 150,000+ LIVE JOBS UPDATE DAILY</p>
            <h1 className="text-6xl font-bold mt-5">Find your dream <span className="uppercase text-6xl"><br/>job in Germany</span> <span className="text-yellow"> <br/> with Jobcy</span></h1>
            <p>Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>

            <div className="bg-color-white w-full mt-10">
                <div>
                    <input type="text" placeholder="Job Title, Keywords or Company" className=" m-5 w-full h-12 px-4" />
                   <Link to="jobs">  <Button action="Search" style={styles.btn}/></Link>
                </div>
            </div>
        </div>

        <div className = "left">
            <img src={BgImage} alt="Hero" />
        </div>
    </div>
  )
}

const styles = {
    hero: {
        backgroundColor: "#F1F0FE",
        backgroundCover: "cover",
        backhroundSize: "cover",
    },
}

export default Hero