import AllCourses from "../components/AllCourses/AllCourses";
import CoursesCategories from "../components/AllCourses/CoursesCategories";
import { useAuthenticationChecking } from "../shared/Registration/useAuthenticationChecking";

export const allCategories = [
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
  useAuthenticationChecking();

  return (
    <section className="grid grid-cols-1 gap-2 m-4 my-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:m-10">
      <div>
        <CoursesCategories categories={allCategories} />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <AllCourses />
      </div>
    </section>
  );
};

export default AllCoursesPage;
