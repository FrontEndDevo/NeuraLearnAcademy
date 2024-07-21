import { Link } from "react-router-dom";

const LinkButton = () => (
  <Link
    to="/all-courses"
    className="px-8 py-3 text-base font-bold text-center text-white duration-200 bg-primary-500 rounded-3xl hover:bg-primary-700"
  >
    Get Started
  </Link>
);
export default LinkButton;