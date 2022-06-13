import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/reducers/userReducer/userSelectors";
import { logoutInitiate } from "../redux/actions/actions";

export const useLogoutFunc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  const handleLogOut = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };
  return {
    logOutFunctionHook: () => handleLogOut(),
  };
};
