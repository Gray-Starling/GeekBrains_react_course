import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { registerInitiate } from "../../redux/reducers/userReducer/userReducer";
// import { NavLink, useNavigate } from "react-router-dom";

export const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(registerInitiate(email, password, displayName));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="***"
          />

          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </>
  );
};
