import Benefits from "./Benefits";
import hero from "/src/assets/images/homepage/hero.png";
import { Link } from "react-router-dom";

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
      <Benefits/>
    </div>
  );
};

export default Hero;
