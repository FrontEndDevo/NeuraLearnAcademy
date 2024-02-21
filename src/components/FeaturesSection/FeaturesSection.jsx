import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import men1 from "../../assets/images/homepage/FeatureSection/men1.jpeg";
import men2 from "../../assets/images/homepage/FeatureSection/men2.jpeg";
import women from "../../assets/images/homepage/FeatureSection/women1.jpeg";
import bg from "../../assets/images/homepage/FeatureSection/bg.jpeg";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Fahmy ali",
    description:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset.With Neura Learn  Academy Business, I can give my team the space to learn and take the initiative.It means we can produce higher quality work more quickly."',
    personPostion: "CEO of international",
    CardImage: men1,
  },
  {
    title: "Mona ali",
    description:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset.With Neura Learn  Academy Business, I can give my team the space to learn and take the initiative.It means we can produce higher quality work more quickly."',
    personPostion: "Front End Developer",
    CardImage: women,
  },
  {
    title: "karim ali",
    description:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset.With Neura Learn  Academy Business, I can give my team the space to learn and take the initiative.It means we can produce higher quality work more quickly."',
    personPostion: "Back End Developer ",
    CardImage: men2,
  },
];
const FeaturesSection = () => {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "100% 130%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <h1 className="pt-20 mb-5 font-bold text-center text-1xl md:text-3xl">
        How Professional Certificates have helped others
      </h1>
      <h3 className="mb-8 font-medium text-center md:mb-12">
        Stories from those that have completed Professional Certificates
      </h3>

      <section
        className="grid px-0 py-20 place-items-center"
        style={divStyle}
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {cardData.map((card, index) => {
              return (
                <>
                  <div key={index} className="p-4">
                    <div className=" relative bg-black rounded-tl-[23px] rounded-tr-[23px] rounded-bl-[23px]">
                      <h2 className=" text-white text-[25px] md:text-[35px] text-opacity-80 font-extrabold ] tracking-widest pt-12 pb-20 pl-6 md:pl-20">
                        #Comments
                      </h2>
                      <h2 className="absolute text-2xl font-extrabold text-white bottom-2 left-36">
                        {card.title}
                      </h2>
                    </div>
                    <div className="relative CardDetails bg-stone-50 ">
                      <img
                        src={card.CardImage}
                        alt={card.title}
                        className="absolute left-0 z-10 w-32 h-32 text-white border-4 border-white rounded-full shadow-lg -top-20"
                      />
                      <div className="absolute py-2 text-sm font-semibold left-32 md:left-36 text-neutral-500 md:text-normal">
                        {card.personPostion}
                      </div>

                      <p className="h-full  text-black text-[ ] md:text-[17px]  px-6 pt-16  bg-stone-50  ">
                        {card.description}
                      </p>

                      <Link
                        to="/"
                        className="inline-block relative left-[45%] md:left-[60%] 2xl:left-[70%] text-primary-500 duration-200 hover:text-primary-700 text-base font-bold py-5"
                      >
                        Read all story{" "}
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Link
          to="/"
          className="p-3 text-base font-bold text-center text-white duration-200 bg-primary-500 hover:bg-primary-700 rounded-3xl"
        >
          View more customer stories{" "}
        </Link>
      </section>
    </>
  );
};

export default FeaturesSection;
