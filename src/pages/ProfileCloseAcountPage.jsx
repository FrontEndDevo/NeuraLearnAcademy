import ProfileHeader from "../shared/ProfileHeader";

const ProfileCloseAcountPage = () => {
  const borderStyle = "border border-gray-400";
  const title = "Close Account";
  const description = "Close your account permanently.";
  return (
    <div>
      <section className={`py-8 border-b-0 ${borderStyle}`}>
        <ProfileHeader title={title} description={description} />
        <div className="px-3 pb-12 border-b border-gray-400 md:px-5 lg:px-10">
          <div className="flex flex-wrap justify-between gap-5 py-5">
            <p className="text-l md:text-xl">
              Suspending account activity for an indefinite period
            </p>

            <select
              name=""
              id=""
              className={`lg:px-4 lg:py-1 outline-none ${borderStyle}`}
            >
              <option value="">Select period</option>
              <option value="">1 Day</option>
              <option value="">3 Day</option>
              <option value="">1 Month</option>
            </select>
          </div>
          <button className="px-3 py-2 mt-6 text-white bg-black rounded">
            Save & log out
          </button>
        </div>

        <div className="p-3 lg:p-12 md:p-6">
          <p className="font-bold">
            <span className="font-semibold text-red-600">Warning</span>: If you
            close your account, you will be unsubscribed from all your 24
            courses, and will lose access forever
          </p>

          <button className="px-3 py-2 mt-6 text-white bg-black rounded">
            Close Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfileCloseAcountPage;
