"use client";
import React, { useEffect, useRef } from 'react';
import RocketSvg from '../sub/RocketSvg';
import { motion } from 'framer-motion';
import { slideInFromRight } from '@/utils/motion';

type Props = {}

const ToTopBtn = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFlying, setIsFlying] = React.useState(false);
  const rocketRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (isFlying && rocketRef.current) {
      const rocketElement = rocketRef.current;
      rocketElement.style.transform = 'translateY(-92vh)';
      rocketElement.style.transition = 'transform 1.8s ease-in-out';
      setTimeout(() => {
        rocketElement.style.transform = 'translateY(0)'; // Reset rocket position
        setIsFlying(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsVisible(false); // Reset isVisible state
      }, 2000);
    }
  }, [isFlying]);

  const handleClick = () => {
    setIsFlying(true);
  };

  return (
    <motion.div 
    className={`fixed bottom-10 right-10 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    variants={slideInFromRight(0.5)}
    >
      <motion.div 
      className=' hover:bg-slate-800 transition-all hover:rounded-full '
      transition={{
        duration: 1,
      }}
      >
      <button
        onClick={handleClick}
        ref={rocketRef}
        className='sm:h-16 sm:w-16 h-[30px] w-[30px] rounded-full transition-all duration-500 ease-in-out rocket '
      >
        <RocketSvg />
      </button>
      </motion.div>
    </motion.div>
  );
};

export default ToTopBtn;
