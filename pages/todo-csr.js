// pages/todo/[id].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Todo = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const id = 1;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [id]);

  return <div>Todo - {data ? data.title : "loading..."}</div>;
};

export default Todo;
