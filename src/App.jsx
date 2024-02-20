import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyLearningsPage from "./pages/MyLearningsPage";
import ShopingCart from "./components/ShopingCart/ShopingCart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my-learnings" element={<MyLearningsPage />} />
        <Route path="/cart" element={<ShopingCart />} />
      </Routes>
    </>
  );
};

export default App;
