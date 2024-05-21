"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/constants";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
type Props = {}

const Experience = (props: Props) => {
  const {ref, inView} = useInView({
    triggerOnce: false
})
  return (
    <div id="experience" className="flex flex-col items-center justify-center">
      <h1  className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 py-10 text-center">
        My Experiences
      </h1>
      <VerticalTimeline
      lineColor="rgba(255, 255, 255, 0.25"
      
      >
        <div ref={ref}>
        {
          experiencesData.map((item, index) => (
            <motion.div
              
                    variants={ index%2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.8) }
                    animate={inView ? "visible" : "hidden"}
                    key={index}
              >
            
            <React.Fragment
            key={index}
            >
              <VerticalTimelineElement
              
                            position={index%2 === 0 ? "left" : "right"}
              visible={true}
              contentStyle={{
                background:
                  "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  "rgba(255, 255, 255, 0.25)",
                fontSize: "1.5rem",
                color:"#fff",
              }}
            >
              <h3 className="font-semibold capitalize text-2xl leading-3 -mb-2">
                {item.title}
              </h3>
              <p className="font-normal pl-3">
                --&gt; {item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
            </React.Fragment>
            </motion.div>
          ))
        }
        </div>
      </VerticalTimeline>
    </div>
  )
}

export default Experience