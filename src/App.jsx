import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyLearningsPage from "./pages/MyLearningsPage";
import PageNotFound from "./pages/PageNotFound";


import ShoppingCartPage from "./pages/ShoppingCartPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my-learnings" element={<MyLearningsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
