const ProfileCloseAcountPage = () => {
  const borderStyle = "border border-gray-400";
  return (
    <div>
      <section className={`py-8 border-b-0 ${borderStyle}`}>
        <h1 className="text-2xl font-semibold text-center md:text-3xl">
          Close Account
        </h1>
        <p className="pb-8 text-center border-b border-gray-400 text-l md:text-xl">
          Close your account permanently.
        </p>

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
