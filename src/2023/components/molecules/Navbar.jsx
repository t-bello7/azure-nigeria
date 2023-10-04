import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/twitter.svg";

const navlinks = [
  {
    url: "/pagetwo",
    name: "PageTwo",
  },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    setNavOpen(!navOpen);
    navigate("/");
  };
  return (
    <div
      className={`transparent border-b-lightPurple md:border-b-gray100 container z-10 mx-auto flex items-center justify-between border-b bg-transparent p-7 
                      md:static md:max-w-[80%] md:p-7`}
    >
      <Link to="/">
        <div className="font-clashDisplay text-[20px] font-bold md:w-[50%]">
          <span className="font-bold">Azure</span>
          <span className="text-lightPurple">Nigeria</span>
        </div>
      </Link>
      <Button
        variant="icon"
        iconPath={MenuIcon}
        onClick={() => setNavOpen(!navOpen)}
        extraStyle="md:hidden"
      />
      <div
        className={`bg-darkBlue absolute left-[50%] h-[60vh] w-[90%] translate-x-[-50%] rounded-lg p-12 ${
          navOpen ? "top-0" : "-top-[1000%]"
        }
                        md:static md:flex md:h-fit md:w-[50%] md:translate-x-0 md:justify-between md:p-0`}
      >
        <Button
          variant="icon"
          iconPath={CloseIcon}
          onClick={() => setNavOpen(!navOpen)}
          extraStyle="float-right md:hidden"
        />
        <ul className="my-12 h-fit md:my-0 md:flex md:gap-4">
          <li className="mb-2 pb-2 pt-2">
            <button type="button" data-id="timeline" onClick={handleScroll}>
              {" "}
              Timeline
              {" "}
            </button>
          </li>
          <li className="mb-2 pb-2 pt-2">
            <button type="button" data-id="overview" onClick={handleScroll}>
              {" "}
              Overview
              {" "}
            </button>
          </li>
          <li className="mb-2 pb-2 pt-2">
            <button type="button" data-id="faq" onClick={handleScroll}>
              {" "}
              FAQs
              {" "}
            </button>
          </li>
          {navlinks.map((item) => (
            <li key={uuidv4()} className="mb-2 pb-2 pt-2 hover:text-slate-300">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="https://www.meetup.com/nigeria-microsoft-azure-meetup-group/">
          <Button name="Register" />
          {" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
