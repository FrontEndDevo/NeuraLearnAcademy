import Courses from "../components/Courses/Courses";
import NewCareerRecommendations from "../components/NewCareerRecommendations/NewCareerRecommendations";
import FaqComponent from "../components/FaqsQuestions/FaqComponent";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ResourceGuide from "../components/ResourceGuide/ResourceGuide";
import TopCategories from "../components/TopCategories/TopCategories";
import Hero from "../components/Hero/Hero";
import Specializations from "../components/Specializations/Specializations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthenticated, load_user } from "../redux/actions/auth-methods";
const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );

  // Redirect to login page if user is not authenticated.
  useEffect(() => {
    // Check if the user is authenticated.
    async function checkAuthentication() {
      await checkAuthenticated(dispatch);
    }
    checkAuthentication();
  }, [navigate, dispatch]);

  //  Load the user information if the user is authenticated.
  useEffect(() => {
    async function loadUserInformation() {
      await load_user(dispatch);
    }

    if (isAuthenticated == true) {
      loadUserInformation();
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, dispatch]);

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
