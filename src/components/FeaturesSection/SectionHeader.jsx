import PropTypes from "prop-types";
const SectionHeader = ({ title, subtitle }) => (
  <>
    <h1 className="pt-20 mb-5 font-bold text-center text-1xl md:text-3xl">
      {title}
    </h1>
    <h3 className="mb-8 font-medium text-center md:mb-12">{subtitle}</h3>
  </>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeader;
