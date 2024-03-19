import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyLearningsPage from "./pages/MyLearningsPage";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";
import AllCoursesPage from "./pages/AllCoursesPage";

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-courses" element={<AllCoursesPage />} />
      </Routes>
    </>
  );
};

export default App;
