import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion } from "framer-motion";
import { fadedown, normalFadeIn } from "../variants";
const Price = () => {
  return (
    <div className="mt-20" id="price">
      <motion.h2
        variants={normalFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
      >
        Pricing
      </motion.h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <motion.div
              variants={fadedown}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="p-10 border border-neutral-700 rounded-xl "
            >
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    ( Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li className="mt-8 flex items-center " key={index}>
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full 
                h-12 p-5 mt-20 tracking-tighter text-xl hover:bg-orange-900
                border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
