import bg from "../../assets/images/homepage/FeatureSection/bg.jpeg";

const professionalPeople = [
  {
    id: 1,
    title: "John Stowt",
    story:
      '"I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "CEO manager",
    CardImage: "https://i.postimg.cc/L62WrtBL/John-Stowt.jpg",
  },
  {
    id: 2,
    title: "Yasser Ali",
    story:
      '"One of the best decisions I have made was to take the Professional Certificate. I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "Front End Developer",
    CardImage:
      "https://i.postimg.cc/QC6nLvxn/pexels-simon-robben-55958-614810.jpg",
  },
  {
    id: 3,
    title: "karim Mahmoud",
    story:
      '"Now I am a full stack developer. I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "full stack Developer",
    CardImage: "https://i.postimg.cc/x1d4d9Zd/Karim-Mahmoud.jpg",
  },
];

const FeaturesSection = () => {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "100% 130%",
    backgroundRepeat: "no-repeat",
  };

  const professionalCertifications = professionalPeople.map((card) => (
    <div key={card.id} className="p-4">
      <div className=" relative bg-black rounded-tl-[23px] rounded-tr-[23px] rounded-bl-[23px]">
        <h2 className=" text-white text-[25px] md:text-[35px] text-opacity-80 font-extrabold ] tracking-widest pt-12 pb-20 pl-6 md:pl-20 select-none">
          #Comments
        </h2>
        <h2 className="absolute text-2xl font-extrabold text-white capitalize bottom-2 left-36">
          {card.title}
        </h2>
      </div>

      <div className="relative CardDetails bg-stone-5">
        <img
          src={card.CardImage}
          alt={card.title}
          className="absolute left-0 z-10 w-32 h-32 text-white border-4 border-white rounded-full shadow-lg -top-20"
        />
        <div className="absolute py-2 text-sm font-semibold left-32 md:left-36 text-neutral-500 md:text-normal">
          {card.job}
        </div>

        <p className="h-full py-10 text-black md:text-[17px] px-6 pt-16 bg-stone-50">
          {card.story}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="pt-20 mb-5 font-bold text-center text-1xl md:text-3xl">
        How Professional Certificates have helped others
      </h1>
      <h3 className="mb-8 font-medium text-center md:mb-12">
        Stories from those that have completed Professional Certificates
      </h3>

      <section className="grid px-0 py-20 place-items-center" style={divStyle}>
        <div className="container">
          <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {professionalCertifications}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
