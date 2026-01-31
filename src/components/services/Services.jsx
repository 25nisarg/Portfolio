import React from 'react'
import "./services.css"
import MacModelContainer from './Mac/MacModelContainer'
import ConsoleModelContainer from './Console/ConsoleModelContainer'
import CupModelContainer from './Cup/CupModelContainer'
import Counter from './Counter'
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Applications",
    counter: "End-to-end MERN stack development for startups and enterprises.",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Automation & Scripting",
    counter: "Using Python to automate complex tasks and streamline workflows.",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Database Management",
    counter: "Designing scalable data architectures using MongoDB and SQL databases.",
  },
]
const Services = () => {
  const [currentServiceId, setcurrentServiceId] = useState(1)
  const ref = useRef()
  const isInView = useInView(ref, { margin: "-200px" })
  return (
    <div className='services' ref={ref}>
      <div className="sSection left">
        <motion.h1 variants={textVariants} initial="intial" animate={isInView ? "animate" : "initial"} className='sTitle'>How Do I Help?</motion.h1>
        <motion.div variants={listVariants} initial="intial" animate={isInView ? "animate" : "initial"} className="serviceList">
          {services.map((service) => (
            <motion.div variants={listVariants} className="service" key={service.id} onClick={() => {setcurrentServiceId(service.id)}}>
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter}</h3>
              </div>
            </motion.div>
          )
          )}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={10} text="Projects Completed" />
          <Counter from={0} to={8} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <MacModelContainer />
        ) : currentServiceId === 2 ? (
          <MacModelContainer />

        ) : (
          <CupModelContainer />

        )}
      </div>
    </div >
  )
}

export default Services
