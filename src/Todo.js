import "./Todo.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Todo({ todo, id }) {
  const history = useHistory();
  return (
    <div className="todo">
      <li onClick={(e) => history.push(`/update/${id}`)}>{todo}</li>

      <Button
        onClick={(e) => db.collection("todos").doc(id).delete()}
        variant="contained"
        size="large"
      >
        <DeleteForeverIcon />
      </Button>
    </div>
  );
}

export default Todo;
