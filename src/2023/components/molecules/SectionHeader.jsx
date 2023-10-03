import PropTypes from "prop-types";

function SectionHeader({ heading, subHeading }) {
  return (
    <div className="m-5 space-y-1">
      <span>
        {' '}
        {subHeading}
        {' '}
      </span>
      <h1 className="font-clashDisplay text-2xl font-bold md:text-[32px]">
        {" "}
        {heading}
        {" "}
      </h1>
      <hr className="bg-red w-[10%] border border-2 border-red-400" />
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
