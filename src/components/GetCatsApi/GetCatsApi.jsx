import React, { useEffect, useState } from "react";

const API_URL_PUBLIC = "https://jsonplaceholder.typicode.com/todos";

export const GetCatsApi = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL_PUBLIC)
      .then((response) => response.json())
      .then((result) => setTodos(result));
    console.log(todos);
  }, []);

  return (
    <div>
      <span>Список</span>
      {todos.map((item) => {
        <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};
