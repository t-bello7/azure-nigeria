import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Button({
  name,
  variant,
  variants,
  iconPath,
  defaultStyle,
  extraStyle,
  onClick,
}) {
  switch (variant) {
    case "icon":
      return (
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          className={`rounded-sm p-2 md:hidden ${defaultStyle} ${extraStyle}`}
          onClick={onClick}
        >
          <img
            src={iconPath}
            alt={`${name}-icon`}
            className={`aspect-square w-4 hover:scale-125 ${extraStyle}`}
          />
        </motion.button>
      );

    default:
      return (
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-md bg-primaryColor px-4 py-2 capitalize text-white hover:border-[2px] ${defaultStyle} ${extraStyle}`}
          onClick={onClick}
        >
          {name}
        </motion.button>
      );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  variants: PropTypes.shape({}),
  variant: PropTypes.string,
  iconPath: PropTypes.string,
  defaultStyle: PropTypes.string,
  onClick: PropTypes.func,
  extraStyle: PropTypes.string,
};

Button.defaultProps = {
  name: "button",
  variants: {},
  variant: "button",
  iconPath: "not-found",
  onClick: () => {},
  defaultStyle: "cursor-pointer hover:outline",
  extraStyle: "",
};
export default Button;
