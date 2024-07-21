import PropTypes from "prop-types";
const SectionHeader = ({ title }) => {
  return (
    <>
      <div className="relative flex items-center justify-center mb-8">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
      </div>
      <div className="relative flex items-center justify-between flex-grow w-11/12 mt-0 mb-12 ml-auto mr-auto">
        <div className="relative flex items-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <div className="flex-grow h-1 bg-black"></div>
        <div className="relative flex items-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};
SectionHeader.PropTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionHeader;
