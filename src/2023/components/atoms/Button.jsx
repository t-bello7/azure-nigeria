const Button = ({
  bgColor = "lightPurple",
  color = "white",
  name,
  variant = "button",
  iconPath = "",
  defaultStyle = "cursor-pointer hover:outline",
  extraStyle,
  onClick,
}) => {
  switch (variant) {
    case "icon":
      return (
        <button
          className={`rounded-sm p-2 md:hidden hover:border-[2px] hover:border-violet-800 ${defaultStyle} ${extraStyle}`}
          onClick={onClick}
        >
          <img
            src={iconPath}
            alt={`${name}-icon`}
            className={`hover:scale-125 w-4 aspect-square ${extraStyle}`}
          />
        </button>
      );

    default:
      return (
        <button
          className={`rounded-md px-4 py-2 capitalize hover:border-[2px] hover:border-violet-800 text-${color}  ${defaultStyle} ${extraStyle}`}
          onClick={onClick}
          style={{
            background: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
          }}
        >
          {name}
        </button>
      );
  }
};

export default Button;
