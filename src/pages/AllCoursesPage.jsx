import CoursesCategories from "../components/AllCourses/CoursesCategories";

const AllCoursesPage = () => {
  return (
    <section className="container grid grid-cols-4 gap-2">
      <div className="col-span-1">
        {/* Aside + Search + Sort + Filters */}
        <CoursesCategories />
      </div>

      <div className="col-span-3">
        <h1>courses</h1>
      </div>
    </section>
  );
};

export default AllCoursesPage;
