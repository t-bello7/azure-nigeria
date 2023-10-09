import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  firstName, letter, fadeInUp, btnGroup
} from "../../utils/animation";
import Button from "../atoms/Button";
import conferenceSvg from "../../assets/imgs/business-conference.svg";

function Jumbotron() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className="container mx-auto my-8 grid h-[80vh] max-w-[90%] items-center rounded-xl bg-primaryColor200 px-4 md:mt-8 md:grid-cols-2"
    >
      <div className="m-6  flex flex-col items-center justify-around space-y-3 rounded-xl p-9 shadow-2xl">
        <motion.h1 className="mt-[-20px] text-center md:text-5xl">
          Innovative Possibilities in Africa with Artificial Intelligence
          {' '}
          <br />
          {" "}
          <motion.span
            variants={firstName}
            initial="initial"
            animate="animate"
            className="text-2xl"
          >
            <motion.span variants={letter}> 2 </motion.span>
            <motion.span variants={letter}> 7 </motion.span>
            <motion.span variants={letter}> O </motion.span>
            <motion.span variants={letter}> c </motion.span>
            <motion.span variants={letter}> t </motion.span>
            <motion.span variants={letter}> o </motion.span>
            <motion.span variants={letter}> b </motion.span>
            <motion.span variants={letter}> e </motion.span>
            <motion.span variants={letter}> r </motion.span>
            {" "}
          </motion.span>
        </motion.h1>
        <p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-regular md:text-[22px]"
        >
          Lagos, Nigeria | 10am African Time
        </p>
        <Link to="https://www.meetup.com/nigeria-microsoft-azure-meetup-group/events/295095102/">
          <Button variants={btnGroup} name="Register" className="m-2" />
        </Link>
      </div>
      <motion.img
        src={conferenceSvg}
        alt="conferece"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.div>
  );
}

export default Jumbotron;
