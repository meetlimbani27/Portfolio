import React from 'react';
import SkillText from '../../sub/SkillText';
import Image from 'next/image';
import styles from './solarSkill.module.css';

const Skills = () => {
  return (
    <div 
    id="skills"
    className="flex flex-col items-center justify-center gap-3 z-10">
      <SkillText />

      <div className={` ${styles.container} scale-[2.6] mt-[512px] mb-[530px]`}>
    <div className={` ${styles.sun}`}>
    
    </div>
    <div className={` ${styles.mercury}`}></div>
    <div className={` ${styles.venus}`}></div>
    <div className={` ${styles.earth}`}>
      <div className={` ${styles.moon}`}></div>
    </div>
    <div className={` ${styles.mars}`}></div>
    <div className={` ${styles.jupiter}`}></div>
    <div className={` ${styles.saturn}`}></div>
    <div className={` ${styles.uranus}`}></div>
    <div className={` ${styles.neptune}`}></div>
    <div className={` ${styles.pluto}`}>
          <img src="../../../public/solar/nextp.png" alt="Pluto" />
        </div>
  </div>

    </div>
  )
}

export default Skills
