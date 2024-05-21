import * as React from "react";
import { motion } from "framer-motion";
 interface SVGComponentProps  {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  xmlns?: string;
};


const RocketSvg = () => (
  <svg
    // width={1898}
    // height={2372}
    viewBox="0 0 1898 2372"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <motion.g
      id="rocket"
      animate={{ y: [0, 250, 0] }}
      transition={{ 
        times: [0, 1],
        duration: 2,
        repeat: Infinity,
      }}
    >
      {/* Your SVG content goes here */}
    </motion.g>
  </svg>
);

export default RocketSvg;
