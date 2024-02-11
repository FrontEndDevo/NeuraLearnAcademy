import Image1 from "../../assets/images/homepage/ResourceGuideSection/men.jpg";
function ResourcesGuide() {
  return (
    <>
      <div className="container my-10 xl:my-32 p-8  lg:p-16 xl:p-0 bg-white">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-4 xl:gap-28">
          <div className="flex justify-center items-center md:w-3/4 lg:w-10/12 xl:w-full">
            <img src={Image1} alt="" />
          </div>

          {/* Content */}
          <div className="">
            <p className="mb-2 text-sm md:text-base lg:text-lg font-bold text-blue-700">
              Finished a Professional certificate?
            </p>
            <h2 className="mb-6 xl:mb-16 text-lg md:text-sm lg:text-2xl text-gray-700">
              Get resources and support to guide you through the job search process.
            </h2>
            <h3 className="md:text-lg lg:text-xl font-semibold">Showcase your skills</h3>
            <p className="mt-3 mb-6 text-sm md:text-base lg:text-lg">
              Present real-world projects to potential employers.
            </p>
            <h3 className="md:text-lg lg:text-xl font-semibold">Enhance your resume</h3>
            <p className="mt-3 mb-6 text-sm md:text-base lg:text-lg">
              Get support to build a standout resume and LinkedIn profile.
            </p>
            <h3 className="md:text-lg lg:text-xl font-semibold">Ace your interview</h3>
            <p className="mt-3 mb-6 text-sm md:text-base lg:text-lg">
              Practice and improve your interview skills with virtual feedback.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesGuide;
