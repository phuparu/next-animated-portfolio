"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: { x: 400, y: 300, opacity: 0.3 },
  };
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-white rounded"
        variants={variants}
        initial={{ x: -100 }}
        animate="variant1"
      ></motion.div>
    </div>
  );
};

export default TestPage;
