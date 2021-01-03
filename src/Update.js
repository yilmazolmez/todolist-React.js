import { Badge, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import db from "./firebase";
import "./Update.css";
function Update() {
  const history = useHistory();
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .doc(id)
      .get()
      .then((data) => {
        setTodo(data.data().todo);
      });
  }, []);

  const updateTodo = (e) => {
    db.collection("todos").doc(id).update({ todo: input });
    history.push("/");
  };
  return (
    <div className="update">
      <h2>
        UPDATE{" "}
        <Button
          variant="contained"
          size="medium"
          onClick={(e) => history.push("/")}
        >
          go back
        </Button>
      </h2>
      <form>
        <TextField
          id="outlined-basic"
          placeholder={todo}
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          onClick={updateTodo}
        >
          UPDATE TODO
        </Button>
      </form>
    </div>
  );
}

export default Update;
