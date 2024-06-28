import { motion } from "framer-motion";
import Image from "next/image";

import Shoe from "../public/images/shoe.svg";
import Success from "../public/images/success-icon.svg";
import { useEffect, useState } from "react";

function LoadingPage() {
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConnected(true);
    }, 3000);
  }, []);

  const runningAnimation1 = {
    initial: { x: 60, y: -20, rotate: -18 },
    animate: {
      x: [60, 30, 0, -30, -60, -30, 0, 30, 60],
      y: [-20, -10, 0, 0, 0, 0, -10, -20, -20],
      rotate: [-18, -9, 0, 9, 27, 9, 0, -9, -18],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const runningAnimation2 = {
    initial: { x: -60, y: 0, rotate: 27 },
    animate: {
      x: [-60, -30, 0, 30, 60, 30, 0, -30, -60],
      y: [0, -10, -20, -20, -20, -10, 0, 0, 0],
      rotate: [27, 9, 0, -9, -18, -9, 0, 9, 27],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="h-screen w-screen grid place-content-center">
        {!isConnected ? (
          <div className="animate-fadeIn">
            <div className="relative flex justify-center items-center">
              <motion.div
                className="absolute"
                variants={runningAnimation1}
                initial="initial"
                animate="animate"
              >
                <Image height={50} width={50} src={Shoe} alt="left_shoe" />
              </motion.div>
              <motion.div
                className="absolute"
                variants={runningAnimation2}
                initial="initial"
                animate="animate"
              >
                <Image height={50} width={50} src={Shoe} alt="right_shoe" />
              </motion.div>
            </div>
            <div className="pt-10 animate-pulse">
              Connecting and Syncing with your Smart Shoes
            </div>
          </div>
        ) : (
          <div className="animate-fadeInOut">
            <div className="flex justify-center items-center">
              <Image height={50} width={50} src={Success} alt="success" />
            </div>
            <div className="pt-5 text-center">Synced</div>
          </div>
        )}
      </div>
    </>
  );
}

export default LoadingPage;
