import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SectionHeader({ heading, subHeading }) {
  return (
    <div className="m-5 space-y-1">
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        //  animate={{y:0, opacity:1}}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.8 }}
        className="capitalize"
      >
        {" "}
        {subHeading}
        {" "}
      </motion.span>
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="font-clashDisplay text-2xl font-bold capitalize md:text-[32px]"
      >
        {" "}
        {heading}
        {" "}
      </motion.h1>
      <motion.hr
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-red w-[10%] border border-2 border-primaryColor100"
      />
    </div>
  );
}

SectionHeader.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

SectionHeader.defaultProps = {
  heading: "section heading",
  subHeading: "section sub heading",
};

export default SectionHeader;
