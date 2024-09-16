import React from "react";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, normalFadeIn } from "../variants";
const Opinion = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <motion.h2
        variants={normalFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
      >
        {" "}
        what people are saying
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((test, index) => (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            key={index}
          >
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{test.text}</p>
              <div className="flex mt-8 items-center">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={test.image}
                  alt={test.image}
                />
                <div>
                  <h6>{test.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {test.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Opinion;
