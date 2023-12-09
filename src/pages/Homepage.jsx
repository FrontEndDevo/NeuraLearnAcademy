import Courses from "../components/Courses/Courses";
import NewCareerRecommendations from "../components/NewCareerRecommendations/NewCareerRecommendations";
import ProfessionalCertificates from "../components/ProfessionalCertificates/ProfessionalCertificates";
import FaqComponent from "../components/FaqsQuestions/FaqComponent";
const Homepage = () => {
  return (
    <>
      <Courses />
      <NewCareerRecommendations />
      <ProfessionalCertificates />
      <FaqComponent />
    </>
  );
};

export default Homepage;
