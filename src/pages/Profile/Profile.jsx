import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";

export const Profile = () => {
  const user = useSelector(userSelector);

  return (
    <>
      <div className="wrp">Страница профиля в разработке...</div>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <p>{user.uid}</p>
        </div>
      ) : (
        <p> ввойдите</p>
      )}
    </>
  );
};
