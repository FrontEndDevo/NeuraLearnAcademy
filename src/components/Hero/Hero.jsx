import Benefits from "./Benefits";
import heroImage from "/src/assets/images/homepage/hero.png";
import HeroContent from "./HeroContent";
import LinkButton from "./LinkButton";

const Hero = () => {
  const heroContent = {
    title: "Learn. Improve. Grow.",
    description:
      "Build your skills through job-ready programs and earn your certification to propel your career.",
  };

  return (
    <div className="mx-4 mt-24 md:mx-8 lg:mx-12">
      <section className="grid items-center justify-center">
        <div>
          <HeroContent {...heroContent} />
          <LinkButton />
        </div>
        <div className="row-start-1 md:col-start-2">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>
      <Benefits />
    </div>
  );
};

export default Hero;
