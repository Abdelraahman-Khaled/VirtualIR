import Link from "react-scroll/modules/components/Link";
import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { motion } from "framer-motion";
import { fadeRight, fadeRightIndex } from "../variants";
const Footer = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <motion.h3
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-md font-semibold mb-4 "
          >
            Resources
          </motion.h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li
                variants={fadeRightIndex}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={index}
              >
                <Link
                  className="text-neutral-300 hover:text-white duration-200"
                  to={link.href}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.h3
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-md font-semibold mb-4 "
          >
            platform
          </motion.h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li
                variants={fadeRightIndex}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={index}
              >
                <Link
                  className="text-neutral-300 hover:text-white duration-200"
                  to={link.href}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.h3
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-md font-semibold mb-4 "
          >
            Community
          </motion.h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li
                variants={fadeRightIndex}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={index}
              >
                <Link
                  className="text-neutral-300 hover:text-white duration-200"
                  to={link.href}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
