import Courses from "../components/Courses/Courses";
import NewCareerRecommendations from "../components/NewCareerRecommendations/NewCareerRecommendations";
import FaqComponent from "../components/FaqsQuestions/FaqComponent";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ResourceGuide from "../components/ResourceGuide/ResourceGuide";
import TopCategories from "../components/TopCategories/TopCategories";
import Hero from "../components/Hero/Hero";
import Specializations from "../components/Specializations/Specializations";
import { useAuthenticationChecking } from "../shared/Registration/useAuthenticationChecking";
import { public_courses } from "../redux/actions/courses-methods";
import { useDispatch } from "react-redux";
const Homepage = () => {
  useAuthenticationChecking();
  const dispatch = useDispatch();
  public_courses(dispatch);
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
