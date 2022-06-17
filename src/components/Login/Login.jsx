import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/actions/actions";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/profile");
  //   }
  // }, [navigate, user]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    navigate("/profile");
  };
  return (
    <>
      <div>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <input type={"text"} onChange={(ev) => setEmail(ev.target.value)} />
          <input
            type={"text"}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </>
  );
};
