// pages/todo/[id].js
import React from "react";

const Todo = ({ data }) => {
  return <div>Todo - {data.title}</div>;
};

export const getStaticProps = async (ctx) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default Todo;
