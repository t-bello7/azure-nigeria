import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stagger, header, mobileLinks } from "../../utils/animation";
import Button from "../atoms/Button";
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close-square.svg";

const navlinks = [
  {
    url: "/home",
    name: "Home",
  },
  {
    url: "/info",
    name: "Info",
  },
  {
    url: "/session",
    name: "Session",
  },
  {
    url: "/speakers",
    name: "Speakers",
  },
  {
    url: "/organizers",
    name: "Organizers",
  },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="transparent border-b-lightPurple md:border-b-gray100 z-10 mx-auto flex items-center justify-between border-b bg-transparent p-7 shadow-lg md:static md:p-7"
    >
      <Link to="/">
        <motion.div
          variants={header}
          initial="initial"
          animate="animate"
          className="font-clashDisplay text-[20px] font-bold md:w-[50%]"
        >
          <span className="font-bold">Azure</span>
          <span className="text-lightPurple">Nigeria</span>
        </motion.div>
      </Link>
      <Button
        variant="icon"
        variants={header}
        iconPath={MenuIcon}
        onClick={() => setNavOpen(!navOpen)}
        extraStyle="md:hidden"
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className={`absolute left-[50%] top-0 h-[100vh] h-[60vh] w-[90%] translate-x-[-50%] items-center space-x-2 rounded-lg p-12 transition ease-in ${
          navOpen ? "bg-primaryColor text-white" : "translate-x-[100%]"
        }
                        md:static md:flex md:h-fit md:w-[50%] md:translate-x-0 md:justify-between md:p-0`}
      >
        <Button
          variant="icon"
          iconPath={CloseIcon}
          onClick={() => setNavOpen(!navOpen)}
          extraStyle="float-right md:hidden"
        />
        <motion.ul
          variants={header}
          initial="initial"
          animate="animate"
          className="my-10 h-fit md:my-0 md:flex md:gap-4"
        >
          {navlinks.map((item) => (
            <li
              variant={mobileLinks}
              initial="initial"
              animate="animate"
              key={uuidv4()}
              className="p-[1px] font-montserrat  text-[16px] font-medium transition-all hover:border-b-2 hover:border-violet-900 hover:font-semibold"
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </motion.ul>
        <Link to="/register">
          <Button
            name="Register"
            variants={header}
            extraStyle="bg-primaryColor100"
            initial="initial"
            animate="animate"
          />
          {" "}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
