import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyLearningsPage from "./pages/MyLearningsPage";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileInfoPage from "./pages/ProfileInfoPage";
import ProfilePasswordSecurityPage from "./pages/ProfilePasswordSecurityPage";
import ProfilePrivacyPage from "./pages/ProfilePrivacyPage";
import ProfileNotificationPage from "./pages/ProfileNotificationPage";
import ProfileCloseAcountPage from "./pages/ProfileCloseAcountPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import InstructorPage from "./pages/Instructor/InstructorPage";
import Activation from "./components/Registration/Activation/Activation";
import ResetPassword from "./components/Registration/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "./components/Registration/ResetPassword/ResetPasswordConfirm";
import Summarizers from "./pages/Summarizers";
import ChatBot from "./pages/ChatBot";
import CoursesContentPage from "./pages/Instructor/CoursesContentPage";
import RequireAuth from "./components/Registration/RequireAuth/RequireAuth";
import QuestionGenerationPage from "./pages/QuestionGenerationPage";
import UserPage from "./pages/Users/UserPage";
import Spinner from "./shared/popup/Spinner";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import ContactUs from "./shared/ContactUs";
import AboutUs from "./shared/AboutUs";
import ProjectTeam from "./shared/ProjectTeam";

const loadingSpinnerId = document.getElementById("loading__spinner");
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="/activate/:uid/:token" element={<Activation />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route element={<RequireAuth />}>
          <Route path="/my-learnings" element={<MyLearningsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/all-courses" element={<AllCoursesPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="profileInfo" element={<ProfileInfoPage />} />
            <Route
              path="password&security"
              element={<ProfilePasswordSecurityPage />}
            />
            <Route path="privacy" element={<ProfilePrivacyPage />} />
            <Route path="Notification" element={<ProfileNotificationPage />} />
            <Route path="close-account" element={<ProfileCloseAcountPage />} />
          </Route>

          <Route path="summarizer" element={<Summarizers />} />
          <Route
            path="questionqeneration"
            element={<QuestionGenerationPage />}
          />
          <Route path="ChatBot" element={<ChatBot />} />
          <Route path="CoursesContentPage/:slug" element={<CoursesContentPage />} />
          <Route path="UserContentPage/:slug" element={<UserPage />} />
          <Route
            path="CoursesContentPage/:slug"
            element={<CoursesContentPage />}
          />
        </Route>

        <Route path="contactus" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="team" element={<ProjectTeam />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
