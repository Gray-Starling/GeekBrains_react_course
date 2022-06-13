import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { logoutInitiate } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useLogoutFunc } from "../../hooks/useLogoutFunc";

export const Profile = () => {
  const user = useSelector(userSelector);

  /**
   * Пользовательский хук logout
   */
  const { logOutFunctionHook } = useLogoutFunc();

  return (
    <>
      <div className="wrp">Страница профиля в разработке...</div>

      {user ? (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <p>{user.uid}</p>
          <button onClick={logOutFunctionHook}>Выйти</button>
        </div>
      ) : (
        <p> ввойдите</p>
      )}
    </>
  );
};
