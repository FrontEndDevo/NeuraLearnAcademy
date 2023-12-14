import trophyStar from "../../assets/images/homepage/FeaturesSection/trophy-star.png";
import personCircle from "../../assets/images/homepage/FeaturesSection/person-circle-exclamation.png";
import calendarClock from "../../assets/images/homepage/FeaturesSection/calendar-clock.png";
const FeaturesSection = () => {
  return (
    <section className="py-32 bg-gray-100  ">
      <div className=" container p-8 md:p-10 xl:p-0">
        <h1 className=" text-1xl md:text-3xl font-medium mb-5 text-center tracking-wider ">
          Take The First toward your new career{" "}
        </h1>
        <h3 className="text-center mb-5 md:mb-10 font-medium">
          Get professional-level training and earn a credentail
        </h3>
        <div className="grid grid-cols-1 gap-6 md:gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden  rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-5">
            <div className="flex items-center justify-center">
              <img
                src={personCircle}
                className=" w-7 flex items-center justify-center mt-10"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Prior experlence optioanl
              </h3>
              <p className="mt-4 text-base">
                Build jop-ready skills, even if you,re new to the field
              </p>
              <p className="my-2 font-medium text-gray-400">
                ................................................................................
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                Professional Certificate
              </h3>
              <p className="mt-3 mb-5 text-indigo-900">
                jop openning across entry-level professional certificate field
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white overflow-hidden  rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center">
              <img
                src={trophyStar}
                className=" w-7 flex items-center justify-center mt-10"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Earn a valuable Condtioanl{" "}
              </h3>
              <p className="mt-4 text-base">
                Apply Your New Skills to real-world projects using the latest
                industry tools
              </p>
              <p className="my-2 font-medium text-gray-400">
                ................................................................................
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                A complementary vision
              </h3>
              <p className="mt-3 mb-5 text-indigo-900">
                for the result of design after the short period
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white overflow-hidden rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center">
              <img
                src={calendarClock}
                className=" w-7 flex items-center justify-center mt-10"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Learn at your own pace
              </h3>
              <p className="mt-4 text-base">
                Complete the training at a time that suits you even during full
                time hours
              </p>
              <p className="my-2 font-medium text-gray-400">
                ................................................................................
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                Under 10 hours{" "}
              </h3>
              <p className="mt-3 mb-5 text-indigo-900">
                of flexiable study per week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
