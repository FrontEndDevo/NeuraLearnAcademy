import Image1 from "../../assets/images/homepage/ResourceGuideSection/men.jpg";
const ResourcesGuide = () => {
  const benefitsClasses = "font-semibold md:text-lg lg:text-xl";
  const explainationClasses =
    "mt-3 mb-6 text-sm md:text-base lg:text-lg text-gray-color-500";
  return (
    <>
      <div className="container p-8 my-10 bg-white xl:my-32 lg:p-16 xl:p-0">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 md:gap-4 xl:gap-44">
          <div className="flex items-center justify-center md:w-3/4 lg:w-10/12 xl:w-full">
            <img loading="lazy" src={Image1} alt="" />
          </div>

          {/* Content */}
          <div>
            <h1 className="mb-6 text-sm font-bold text-primary-500 md:text-base lg:text-xl">
              Finished a Professional certificate?
            </h1>
            <h2 className="mb-6 text-lg font-bold  text-gray-color-700 tracking-wide xl:mb-16 md:text-sm lg:text-[22px]">
              Get resources and support to guide you through the job search
              process.
            </h2>
            <h3 className={benefitsClasses}>Showcase your skills</h3>
            <p className={explainationClasses}>
              Present real-world projects to potential employers.
            </p>
            <h3 className={benefitsClasses}>Enhance your resume</h3>
            <p className={explainationClasses}>
              Get support to build a standout resume and LinkedIn profile.
            </p>
            <h3 className={benefitsClasses}>Ace your interview</h3>
            <p className={explainationClasses}>
              Practice and improve your interview skills with virtual feedback.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesGuide;
