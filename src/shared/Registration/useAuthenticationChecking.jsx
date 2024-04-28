import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  checkAuthenticated,
  load_user,
  login,
} from "../../redux/actions/auth-methods";

// Check if the user is authenticated and load the user information.
export const useAuthenticationChecking = () => {
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
          }
        }
      };
      checkIfUserAuthenticated();
    }
  }, [navigate, dispatch, userData, userAuth]);
};
