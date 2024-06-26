import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
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
import ContactUs from "./shared/ContactUs";
import AboutUs from "./shared/AboutUs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthenticated,
  load_user,
  login,
} from "./redux/actions/auth-methods";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);

  // useEffect(() => {
  //   if (userAuth == true) {
  //     if (!userData) {
  //       load_user(dispatch);
  //     }
  //   } else {
  //     const checkIfUserAuthenticated = async () => {
  //       const isAuthenticated = await checkAuthenticated(dispatch);
  //       if (isAuthenticated) {
  //         if (!userData) {
  //           load_user(dispatch);
  //         }
  //       } else {
  //         if (userData) {
  //           await login(dispatch, userData.email, userData.password);
  //         } else {
  //           navigate("/");
  //         }
  //       }
  //     };
  //     checkIfUserAuthenticated();
  //   }
  // }, [navigate, dispatch, userData, userAuth]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userAuth.isAuthenticated) {
        if (!userAuth.user) {
          await load_user(dispatch);
        }
      }
    };
    fetchUserData();
  }, [userAuth, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route
            path="password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="activate/:uid/:token" element={<Activation />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<RequireAuth />}>
            <Route path="my-learnings" element={<MyLearningsPage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="all-courses" element={<AllCoursesPage />} />
            <Route path="instructor" element={<InstructorPage />} />
            <Route path="profile" element={<ProfilePage />}>
              <Route path="profileInfo" element={<ProfileInfoPage />} />
              <Route
                path="password&security"
                element={<ProfilePasswordSecurityPage />}
              />
              <Route path="privacy" element={<ProfilePrivacyPage />} />
              <Route
                path="Notification"
                element={<ProfileNotificationPage />}
              />
              <Route
                path="close-account"
                element={<ProfileCloseAcountPage />}
              />
            </Route>
            <Route path="summarizer" element={<Summarizers />} />
            <Route
              path="questionqeneration"
              element={<QuestionGenerationPage />}
            />
            <Route path="ChatBot/:slug" element={<ChatBot />} />
            <Route
              path="CoursesContentPage/:slug"
              element={<CoursesContentPage />}
            />
            <Route path="UserContentPage/:slug" element={<UserPage />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
