import PropTypes from "prop-types";
const PersonCard = ({ person }) => (
  <div className="p-4">
    <div className="relative bg-black rounded-tl-[23px] rounded-tr-[23px] rounded-bl-[23px]">
      <h2 className="text-white text-[25px] md:text-[35px] text-opacity-80 font-extrabold tracking-widest pt-12 pb-20 pl-6 md:pl-20 select-none">
        #Comments
      </h2>
      <h2 className="absolute text-2xl font-extrabold text-white capitalize bottom-2 left-36">
        {person.title}
      </h2>
    </div>
    <div className="relative CardDetails bg-stone-5">
      <img
        src={person.photo}
        alt={person.title}
        className="absolute left-0 z-10 w-32 h-32 mx-1 text-white border-4 border-white rounded-full shadow-lg -top-20"
      />
      <div className="absolute py-2 text-sm font-semibold left-32 md:left-36 text-neutral-500 md:text-normal">
        {person.job}
      </div>
      <p className="h-full py-10 text-black md:text-[17px] px-6 pt-16 bg-stone-50">
        {person.story}
      </p>
    </div>
  </div>
);

PersonCard.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
export default PersonCard;
