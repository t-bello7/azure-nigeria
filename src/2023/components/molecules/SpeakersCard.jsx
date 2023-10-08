import PropTypes from "prop-types";
import { motion, easeInOut } from "framer-motion";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 0.2,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: "100%",
  },
};

function SpeakersCard({ speakerData }) {
  return (
    <motion.div
      variants={item}
      className="grid justify-items-center drop-shadow-2xl"
    >
      <motion.div
        variants={hoverEffect}
        whileHover="whilehover"
        className="relative"
      >
        <img
          src={speakerData?.img}
          alt="speakerImage"
          className="aspect-square w-[244px]"
        />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] bg-white p-1">
          {speakerData.twitterProfile ? (
            <a
              href={`https://twitter.com/${speakerData.twitterProfile}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={twitterIcon}
                alt="twitterIcon"
                className="aspect-square w-8"
              />
              {" "}
            </a>
          ) : (
            ""
          )}
          {speakerData.linkedinProfile ? (
            <a
              href={`https://twitter.com/${speakerData.linkedinProfile}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={linkedinIcon}
                alt="twitterIcon"
                className="aspect-square w-8"
              />
              {" "}
            </a>
          ) : (
            ""
          )}
        </div>
      </motion.div>
      <h3 className="text-center font-clashDisplay text-xl font-bold">
        {speakerData?.name}
      </h3>
      <p className="text-center">{speakerData?.role}</p>
      <h3 className="text-center font-clashDisplay text-xl font-bold">
        {speakerData?.company}
      </h3>
    </motion.div>
  );
}

SpeakersCard.propTypes = {
  speakerData: PropTypes.shape({
    img: PropTypes.string,
    twitterProfile: PropTypes.string,
    linkedinProfile: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
  }),
};

SpeakersCard.defaultProps = {
  speakerData: {
    img: "https://picsum.photos/200/300",
    twitterProfile: "tbello",
    linkedinProfile: "tbello-7",
    role: "Software Developer",
    name: "Bello Oluwatomisin",
    company: "Extended Networks",
  },
};
export default SpeakersCard;
