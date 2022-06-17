import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
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
