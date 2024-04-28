import { Route, Routes, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  load_user,
  checkAuthenticated,
  login,
} from "./redux/actions/auth-methods";

const App = () => {
  /*
 Here I want to check if the user is auth or not using checkAuthenticated method,
  if authenticated, check if the data is there in the user property of authSlice,
  if there, it's okay,
  if not, get it from load_user method,
  if not authenticated, check if there is any information in the user property of authSlice,
  if there, login for user, if not, redirect the user to login.
   */

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth.isAuthenticated);
  const userData = useSelector((state) => state.userAuth.user);

  useEffect(() => {
    if (userAuth == true) {
      if (!userData) {
        load_user(dispatch);
      }
    } else {
      const checkIfUserAuthenticated = async () => {
        const isAuthenticated = await checkAuthenticated(dispatch);
        if (isAuthenticated) {
          if (!userData) {
            load_user(dispatch);
          }
        } else {
          if (userData) {
            await login(dispatch, userData.email, userData.password);
          } else {
            navigate("/login");
          }
        }
      };
      checkIfUserAuthenticated();
    }
  }, [navigate, dispatch, userData, userAuth]);

  return (
    <>
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
        <Route path="/my-learnings" element={<MyLearningsPage />} />
        <Route path="/*" element={<PageNotFound />} />
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
      </Routes>
    </>
  );
};

export default App;
