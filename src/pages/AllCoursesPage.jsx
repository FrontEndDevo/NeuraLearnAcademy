import CoursesCategories from "../components/AllCourses/CoursesCategories";

const allCategories = [
  "all",
  "programming",
  "development",
  "data science",
  "business",
  "marketing",
  "sales",
  "drawing",
  "photography",
  "category_1",
  "category_2",
  "category_3",
  "category_4",
];

const AllCoursesPage = () => {
  return (
    <section className="grid grid-cols-6 gap-2 m-10">
      <div className="col-span-1">
        {/* Aside + Search + Sort + Filters */}
        <CoursesCategories categories={allCategories} />
      </div>

      <div className="col-span-5">
        <h1>courses</h1>
      </div>
    </section>
  );
};

export default AllCoursesPage;
