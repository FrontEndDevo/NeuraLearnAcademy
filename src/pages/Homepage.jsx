import Courses from "../components/Courses/Courses";
import NewCareerRecommendations from "../components/NewCareerRecommendations/NewCareerRecommendations";
import ProfessionalCertificates from "../components/ProfessionalCertificates/ProfessionalCertificates";
import FaqComponent from "../components/FaqsQuestions/FaqComponent";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ResourceGuide from "../components/ResourceGuide/ResourceGuide";
import TopCategories from "../components/TopCategories/TopCategories";
const Homepage = () => {
  return (
    <>
      <Courses />
      <ProfessionalCertificates />
      <ResourceGuide />
      <NewCareerRecommendations />
      <TopCategories />
      <FeaturesSection />
      <FaqComponent />
    </>
  );
};

export default Homepage;
