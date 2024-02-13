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
        <div key={index} className="bg-gray-300 rounded-2xl">
          <div className="grid items-center grid-cols-2 gap-8">
            <img src={item.image} alt={item.title} className="w-full h-52" />
            <div className="pr-6">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm font-semibold leading-6">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="grid grid-cols-2">
      <div className="pb-40 pl-20 pr-10 pt-80 left-specializations-linear-gradient">
        <h1 className="text-[#FFCD3F] font-bold text-4xl">
          Master and gain essential skills with Neura Specializations
        </h1>
        <p className="my-16 text-base text-white">
          Develop a specific career skill through a series of related courses
          and hands-on projects. Put theory into practice and earn a
          Specialization Certificate to add to your CV
        </p>
        <Link
          to="/"
          className="px-8 py-4 bg-white rounded-full text-primary-500"
        >
          Explore specializations with us
        </Link>
      </div>

      <div className="pb-40 pl-20 pr-10 specializations right-specializations-linear-gradient pt-80">
        {renderedOurSpecializations}
      </div>
    </section>
  );
};

export default Specializations;
