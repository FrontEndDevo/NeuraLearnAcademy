import UserCourses from "../components/UserCourses/UserCourses";
import { useAuthenticationChecking } from "../shared/Registration/useAuthenticationChecking";

const MyLearningsPage = () => {
  useAuthenticationChecking();
  return (
    <>
      <UserCourses />
    </>
  );
};

export default MyLearningsPage;
