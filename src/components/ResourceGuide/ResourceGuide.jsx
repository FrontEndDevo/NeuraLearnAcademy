import Image1 from "../../assets/images/homepage/ResourceGuideSection/men.jpg";
function ResourcesGuide() {
  return (
    <>
      <div className="  container my-10 lg:my-20 p-8 md:p-10 lg:p-16 xl:p-0  bg-white  ">
          <div className="grid  xl:grid-cols-2 gap-8 md:gap-8 xl:gap-28    ">
            <div className="ResourceGuideImage ">
              <img src={Image1}  alt="" />
            </div>

            {/* Content  */}
            <div className="ResorceGuideContent">
              <p className=" mb-2 text-sm md:text-1xl ">
                Finished a Professional certificate?
              </p>
            <h2 className=" mb-16  md:text-2xl   text-gray-700">
                Get resources and support to guide you
                <br /> through the jop search process.
              </h2>
              <h3 className=" md:text-2xl font-medium	">showcase your skills</h3>
              <p className="mt-3 mb-8 text-sm">
                present real world projects to potentail employers.
              </p>
            <h3 className=" md:text-2xl font-medium		">Enhance your resume</h3>
              <p className="mt-3 mb-8 text-sm">
                Get support to build a standout resume and LinkedIn profile
              </p>
            <h3 className=" md:text-2xl font-medium		">Ace your interview</h3>
              <p className="mt-3 mb-8  text-sm">
                Practice and improve your interview skills with virtual feedback.
              </p>
            </div>
        

        </div>

      </div>
    </>
  );
}

export default ResourcesGuide;
