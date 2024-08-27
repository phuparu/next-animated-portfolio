"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.7,
    },
    variant2: {
      x: 400,
      y: -200,
      rotation: 90,
    },
  };
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-500 rounded"
        initial={{ x: -100 }}
        animate={{ y: 400, x: 300, opacity: 0.5 }}
        transition={{ delay: 2, duration: 3 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
