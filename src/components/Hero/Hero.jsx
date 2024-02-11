import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hero from "/src/assets/images/homepage/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="mx-4 mt-24 md:mx-12">
      <section className="flex items-center justify-center">
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

      <section className="grid w-full grid-cols-1 gap-5 p-3 mx-auto mt-8 text-center border shadow-md rounded-xl md:p-8 md:w-11/12 md:grid-cols-2 lg:grid-cols-5 md:text-left">
        <div className="md:col-start-1 md:col-end-3 lg:col-end-2">
          <h2 className="text-xl font-bold">
            Take the first step toward your new career
          </h2>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="mt-5 text-red-700"
            size="3x"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCertificate}
            className="mb-6 text-teal-500"
            size="3x"
          />
          <h2 className="text-lg font-bold">Discover</h2>
          <p>a wide variety of quality courses and specializations. </p>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faHandPointer}
            className="mb-6 text-teal-500"
            size="3x"
          />
          <h2 className="text-lg font-bold">Enroll</h2>
          <p> join in with peers eager to learn–just like you. </p>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faCertificate}
            className="mb-6 text-teal-500"
            size="3x"
          />
          <h2 className="text-lg font-bold">Learn</h2>
          <p>with world-class instructors and hone your professional </p>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faCertificate}
            className="mb-6 text-teal-500"
            size="3x"
          />
          <h2 className="text-lg font-bold">Get Certified</h2>
          <p>and boost your chances at launching or advancing your career.</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
