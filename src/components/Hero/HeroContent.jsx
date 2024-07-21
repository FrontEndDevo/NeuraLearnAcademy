import PropTypes from "prop-types";
const HeroContent = ({ title, description }) => (
  <div className="p-4 mb-10 border-t-2 border-solid shadow-xl lg:w-11/12 lg:p-8">
    <h1 className="mb-4 text-2xl font-bold">{title}</h1>
    <p className="text-base">{description}</p>
  </div>
);
HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default HeroContent;
