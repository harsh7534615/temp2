import React from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const MainPage = () => {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
};

export default MainPage;
