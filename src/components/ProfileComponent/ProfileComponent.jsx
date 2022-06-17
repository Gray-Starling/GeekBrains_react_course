import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db as firebaseDB } from "../../firebase";
import { Link } from "react-router-dom";
import { useLogoutFunc } from "../../hooks/useLogoutFunc";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";

export const ProfileComponent = () => {
  const [data, setData] = useState({});
  const user = useSelector(userSelector);
  const { displayName, email } = user;

  useEffect(() => {
    firebaseDB.child(`profile-db/${displayName}`).on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  /**
   * Пользовательский хук logout
   */
  const { logOutFunctionHook } = useLogoutFunc();

  const dataAvailable = (data) => {
    if (data) {
      return data;
    } else {
      return "no date";
    }
  };
  return (
    <>
      <div>
        <h3>This your profile page, {displayName}</h3>
        <button onClick={logOutFunctionHook}>Log out</button>
      </div>
      <div>
        <p>
          <span>Email: </span>
          <span> {dataAvailable(email)}</span>
        </p>
        <p>
          <span>Phone: </span>
          <span>{dataAvailable(data.phone)}</span>
        </p>
        <p>
          <span>About: </span>
          <span>{dataAvailable(data.about)}</span>
        </p>
      </div>
      <Link to={`/add_profile/${displayName}`}>change profile details</Link>
    </>
  );
};
