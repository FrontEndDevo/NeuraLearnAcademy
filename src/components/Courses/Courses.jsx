import programmer from "../../assets/images/homepage/programmer.jpg";
const categories = [
  "all",
  "programming",
  "web development",
  "bussines",
  "data science",
  "sales & marketing",
];
const Courses = () => {
  const coursesCategories = categories.map((item, i) => (
    <li
      key={i}
      className="px-8 py-2 text-black duration-300 bg-white border-2 rounded-lg hover:bg-black hover:text-white"
    >
      <button className="capitalize">{item}</button>
    </li>
  ));

  return (
    <section className="container py-20 text-center">
      <div className="mb-6">
        <h2 className="mx-40 text-5xl">
          Build your ideas and implement them with the computer !
        </h2>
        <h4 className="mt-6 text-4xl">A broad selection of courses</h4>
        <p className="mt-8 text-lg text-gray-500">
          Choose from the most popular online courses with new additions
          published every month
        </p>
      </div>

      <ul className="flex items-center justify-center gap-4 my-10">
        {coursesCategories}
      </ul>

      <div className="relative p-8 bg-[#EEF3F6] border-2 shadow-lg rounded-3xl">
        <img
          src={programmer}
          alt="programmer"
          className="w-[250px] h-[250px] absolute -top-2 -left-20 border-8 border-primary-700 rounded-full"
        />
        <div className="flex items-center justify-center font-bold leading-7 text-justify px-[19rem] py-20">
          <p>
            Welcome, I am your assistant here to introduce you to
            programming,software, and the world of software, and to create your
            first application through a group of courses that qualify you for
            the labor market with the latest existing technologies, knowing that
            programming is fundamental to the technologies that humans have
            achieved.
          </p>
        </div>
        <button className="flex justify-end px-8 py-4 ml-auto text-2xl text-white capitalize duration-200 rounded-lg bg-primary-700 hover:bg-primary-500">
          explore programming
        </button>
      </div>
    </section>
  );
};

export default Courses;
