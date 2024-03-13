import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyLearningsPage from "./pages/MyLearningsPage";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileInfoPage from "./pages/ProfileInfoPage";
import ProfilePasswordSecurityPage from "./pages/ProfilePassword&SecurityPage";
import ProfilePrivacyPage from "./pages/ProfilePrivacyPage";
import ProfileNotificationPage from "./pages/ProfileNotificationPage";
import ProfileCloseAcountPage from "./pages/ProfileCloseAcountPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my-learnings" element={<MyLearningsPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<ProfileInfoPage />} />
          <Route path="password" element={<ProfilePasswordSecurityPage />} />
          <Route path="privacy" element={<ProfilePrivacyPage />} />
          <Route path="Notification" element={<ProfileNotificationPage />} />
          <Route path="CloseAcount" element={<ProfileCloseAcountPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
