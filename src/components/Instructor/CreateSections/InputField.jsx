import PropTypes from "prop-types";
const InputField = ({ label, placeholder }, ref) => {
  return (
    <div>
      <label className="text-black text-xl font-semibold font-['Open Sans']">
        {label}:
      </label>
      <div className="flex items-center my-3 md:ml-4">
        <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
          Section
        </div>
        <div className="relative w-full">
          <input
            type="text"
            ref={ref}
            className="w-full h-full px-4 py-2 border border-black outline-none bg-zinc-100 border-opacity-80"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
