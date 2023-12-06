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

      <ul className="flex items-center justify-center gap-4">
        {coursesCategories}
      </ul>
    </section>
  );
};

export default Courses;
