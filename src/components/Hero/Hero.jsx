import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hero from "/src/assets/images/homepage/hero.png";
import { Link } from "react-router-dom";
const benifitsArray = [
  {
    icon: faArrowRight,
    title: "Build",
    content: "Take the first step toward your new career",
  },
  {
    icon: faCertificate,
    title: "Discover",
    content: "a wide variety of quality courses and specializations.",
  },
  {
    icon: faHandPointer,
    title: "Enroll",
    content: "join in with peers eager to learn–just like you.",
  },
  {
    icon: faCertificate,
    title: "Learn",
    content: "with world-class instructors and hone your professional.",
  },
  {
    icon: faCertificate,
    title: "Get Certified",
    content: "and boost your chances at launching or advancing your career.",
  },
];
const Hero = () => {
  return (
    <div className="mx-4 mt-24 md:mx-8 lg:mx-12">
      <section className="grid items-center justify-center">
        <div>
          <div className="p-4 mb-10 border-t-2 border-solid shadow-xl lg:w-11/12 lg:p-8">
            <h1 className="mb-4 text-2xl font-bold">Learn. Improve. Grow.</h1>
            <p className="text-base">
              Build your skills through job-ready programs and earn your
              certification to propel your career.
            </p>
          </div>
          <Link
            to="/"
            className="px-8 py-3 text-base font-bold text-center text-white duration-200 bg-primary-500 rounded-3xl hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
        <div className="row-start-1 md:col-start-2">
          <img src={hero} alt="" />
        </div>
      </section>
      <ul className="relative z-0 grid w-full grid-cols-1 gap-5 p-3 mx-auto mt-8 text-center bg-white border shadow-md -mb-28 rounded-xl md:p-8 md:w-11/12 md:grid-cols-2 lg:grid-cols-5 md:text-left">
        {benifitsArray.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon
              icon={item.icon}
              className="mb-6 text-teal-500"
              size="3x"
            />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
