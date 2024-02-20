import { Link } from "react-router-dom";
import img from "../../assets/images/homepage/Specializations/uiux.png";
import Slider from "react-slick/lib/slider";

const ourSpecializations = [
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const Specializations = () => {
  const renderedOurSpecializations = (
    <Slider {...settings}>
      {ourSpecializations.map((item, index) => (
        <div key={index} className="bg-zinc-300 rounded-2xl">
          <div className="grid items-center grid-cols-2 gap-4 md:gap-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-l-2xl"
            />
            <div className="pr-4 md:pr-6">
              <h2 className="text-base font-bold md:text-xl">{item.title}</h2>
              <p className="text-xs font-semibold leading-snug text-justify md:leading-6 md:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="grid-cols-2 md:grid">
      <div className="pt-40 pb-10 pl-10 pr-6 lg:pr-10 md:pb-40 lg:pl-20 md:pt-80 left-specializations-linear-gradient">
        <h1 className="text-[#FFCD3F] font-bold text-xl md:text-3xl lg:text-4xl leading-loose md:leading-[50px] lg:leading-[50px]">
          Master and gain essential skills with Neura Specializations
        </h1>
        <p className="py-4 mb-10 text-xs leading-snug text-justify text-white md:my-10 md:text-sm lg:my-16 lg:text-base">
          Develop a specific career skill through a series of related courses
          and hands-on projects. Put theory into practice and earn a
          Specialization Certificate to add to your CV
        </p>
        <Link
          to="/"
          className="px-4 py-2 text-xs font-bold duration-300 bg-white rounded-full md:text-base md:px-8 md:py-4 text-primary-500 hover:text-primary-700"
        >
          Explore specializations with us
        </Link>
      </div>

      <div className="px-4 py-10 md:pl-20 md:pr-10 md:pb-40 specializations right-specializations-linear-gradient md:pt-80">
        {renderedOurSpecializations}
      </div>
    </section>
  );
};

export default Specializations;
