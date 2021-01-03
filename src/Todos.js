import { Badge } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";
import "./Todos.css";
function Todos({ todos }) {
  return (
    <div className="todos">
      <h2>
        <Badge badgeContent={todos.length} color="error">
          TODO LISTS
        </Badge>
      </h2>
      <ul>
        {todos.map(({ id, todo }) => (
          <Todo key={id} todo={todo} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
