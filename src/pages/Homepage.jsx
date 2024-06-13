import Courses from "../components/Courses/Courses";
import NewCareerRecommendations from "../components/NewCareerRecommendations/NewCareerRecommendations";
import FaqComponent from "../components/FaqsQuestions/FaqComponent";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ResourceGuide from "../components/ResourceGuide/ResourceGuide";
import TopCategories from "../components/TopCategories/TopCategories";
import Hero from "../components/Hero/Hero";
import Specializations from "../components/Specializations/Specializations";
import { useAuthenticationChecking } from "../shared/Registration/useAuthenticationChecking";
import {
  getSubjectCourses,
  public_course_with_subject,
  public_courses,
} from "../redux/actions/courses-methods";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Homepage = () => {
  useAuthenticationChecking();
  
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);

  useEffect(() => {
    const getNeededData = async () => {
      // Fetching a list of available courses (without authentication).
      await public_courses(dispatch);
      await public_course_with_subject(dispatch, "mathematics");

      await getSubjectCourses(dispatch, access);
    };
    getNeededData();
  }, [dispatch, access]);

  return (
    <>
      <Hero />
      <Specializations />
      <Courses />
      <FeaturesSection />
      <ResourceGuide />
      <NewCareerRecommendations />
      <TopCategories />
      <FaqComponent />
    </>
  );
};

export default Homepage;
