import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { prepared } from "fusion-react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

import { deleteTodo, editTodo } from "../redux/todos";

const Todo = ({ deleteTodo, editTodo, todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  if (editing)
    return (
      <ListItem>
        <TextField onChange={e => setText(e.target.value)} value={text} />
        <Button
          onClick={() =>
            editTodo({ ...todo, text }).then(() => setEditing(false))
          }
        >
          save
        </Button>
        <Button onClick={() => setEditing(false)}>cancel</Button>
        <Button onClick={() => deleteTodo(todo)}>delete</Button>
      </ListItem>
    );
  return (
    <ListItem>
      <TextField disabled value={todo.text} />
      <Button onClick={() => setEditing(true)}>edit</Button>
      <FormControlLabel
        label="COMPLETE?"
        control={
          <Checkbox
            onChange={e => editTodo({ ...todo, completed: e.target.checked })}
            checked={todo.completed ? true : false}
          />
        }
      />
    </ListItem>
  );
};

export default compose(
  deleteTodo,
  editTodo
)(Todo);
