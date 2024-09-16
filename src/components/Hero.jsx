import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";
import { fadeRight, normalFadeIn } from "../variants";
import { fadeLeft } from "../variants";
const Hero = () => {
  return (
    <motion.div
      variants={normalFadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col items-center mt-6 lg:mt-20"
      id="home"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualIR build tolls{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""}for developers
        </span>
      </h1>
      <p className="mt-10 text-[1.145rem] text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app idea to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="mx-3 py-3 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 opacity-100  hover:opacity-80 duration-300 ease-in-out transition"
        >
          {" "}
          Strat for Free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border hover:text-black hover:bg-white transition duration-300 ease-in-out "
        >
          Documentation
        </a>
      </div>
      <div className="flex -mt-10 justify-center">
        <motion.video
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support vide tag.
        </motion.video>
        <motion.video
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support vide tag.
        </motion.video>
      </div>
    </motion.div>
  );
};

export default Hero;
