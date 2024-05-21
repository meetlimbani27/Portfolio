"use client"
import React, { useEffect } from 'react';
import RocketSvg from '../sub/RocketSvg';

type Props = {}

const ToTopBtn = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFlying, setIsFlying] = React.useState(false);

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
    if (isFlying) {
      const rocketElement = document.querySelector('.rocket') as HTMLElement;
      if (rocketElement) {
        rocketElement.style.transform = 'translateY(-92vh)';
        rocketElement.style.transition = 'transform 1.8s ease-in-out';
        setTimeout(() => {
          rocketElement.style.transform = 'translateY(0)'; // Reset rocket position
          setIsFlying(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsVisible(false); // Reset isVisible state
        }, 1800);
      }
    }
  }, [isFlying]);

  const handleClick = () => {
    setIsFlying(true);
  };

  return (
    <div className={`fixed bottom-10 right-10 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleClick}
        className='sm:h-16 sm:w-16 h-[30px] w-[30px] rounded-full transition-all duration-500 ease-in-out'
      >
        <RocketSvg />
      </button>
    </div>
  );
};

export default ToTopBtn;
