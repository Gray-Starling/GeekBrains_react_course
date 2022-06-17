import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as firebaseDB } from "../../firebase";
import "./AddProfile.css";

const initialState = {
  phone: "",
  about: "",
};

export const AddProfile = () => {
  const [state, setState] = useState(initialState);
  const { phone, about } = state;
  const { userName } = useParams();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!phone || !about) {
      console.log("No emty fields");
    } else {
      if (!userName) {
        firebaseDB.child("profile-db").push(state, (err) => {
          if (err) {
            console.log("Ошибка добавления в базу", err);
          } else {
            console.log("Ошибки нет, добавленно в базу");
          }
        });
      } else {
        firebaseDB.child(`profile-db/${userName}`).set(state, (err) => {
          if (err) {
            console.log("Ошибка обновления базы", err);
          } else {
            console.log("Ошибки нет, база обновленна");
          }
        });
      }
    }
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div className="wrp">
        <p>Changing your profile data</p>
        <form className="addProfile-form" onSubmit={handleSubmit}>
          <label htmlFor="phone">Your phone number</label>
          <input
            name={"phone"}
            type={"phone"}
            id={"phone"}
            value={phone || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="about">Some words about you</label>
          <textarea
            name="about"
            type="text"
            id="about"
            value={about || ""}
            onChange={handleInputChange}
          />
          <button>Save</button>
        </form>
      </div>
    </>
  );
};
