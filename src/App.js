import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import Todos from "./Todos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Button, makeStyles, TextField } from "@material-ui/core";
import Update from "./Update";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const history = useHistory();
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((todo) => ({
            id: todo.id,
            todo: todo.data().todo,
          }))
        );
      });
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <h1>Basit TODO LIST Uygulaması</h1>
          <form>
            <TextField
              id="outlined-basic"
              label="Write a Todo"
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
              className={classes.margin}
              onClick={addTodo}
            >
              ADD TODO
            </Button>
          </form>
        </div>
        <Switch>
          <Route exact path="/">
            <Todos todos={todos} />
          </Route>
          <Route path="/update/:id">
            <Update />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
