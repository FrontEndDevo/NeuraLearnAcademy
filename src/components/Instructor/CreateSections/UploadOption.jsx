import PropTypes from "prop-types";
const UploadOption = ({ icon, label, onUpload }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const mimeType = file.type;
      let fileType = "file"; // Default type

      if (mimeType.startsWith("image/")) {
        fileType = "image";
      } else if (mimeType.startsWith("video/")) {
        fileType = "video";
      }

      onUpload(fileType, file);
    }
  };

  return (
    <div
      style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
      className="bg-white rounded-[10px] px-3 py-1 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer"
    >
      <form>
        <label
          htmlFor={`${label.toLowerCase()}Input`}
          className="bg-white rounded-[10px] px-3 py-2 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
        >
          <img
            src={icon}
            className="w-8 py-1"
            alt="plus image"
            loading="lazy"
          />
          <span>{label}</span>
          <input
            type="file"
            id={`${label.toLowerCase()}Input`}
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </form>
    </div>
  );
};
UploadOption.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};
export default UploadOption;
