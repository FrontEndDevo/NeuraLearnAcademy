import Image1 from "../../assets/images/homepage/ResourceGuideSection/men.jpg";
function ResourcesGuide() {
  return (
    <>
      <div className="  h-screen  p-28 w bg-white  ">
        <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2   ">
          <div className="ResourceGuideImage ">
            <img src={Image1} className="" width="550px" alt="" />
          </div>

          {/* Content  */}
          <div className="ResorceGuideContent">
            <p className=" mb-2 text-sm">
              Finished a Professional certificate?
            </p>
            <h2 className=" mb-10 text-2xl text-gray-700">
              Get resources and support to guide you
              <br /> through the jop search process.
            </h2>
            <h3 className=" text-2xl	">showcase your skills</h3>
            <p className="mt-2 mb-4 text-sm">
              present real world projects to potentail employers.
            </p>
            <h3 className=" text-2xl	">Enhance your resume</h3>
            <p className="mt-2 mb-4 text-sm">
              Get support to build a standout resume and LinkedIn profile
            </p>
            <h3 className=" text-2xl	">Ace your interview</h3>
            <p className="mt-2 mb-4 text-sm">
              Practice and improve your interview skills with virtual feedback.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesGuide;
