import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { prepared } from "fusion-react";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

import { addTodo, getTodos } from "../redux/todos";
import Todo from "../components/todo";

const TodoPage = ({ addTodo, todos }) => {
  const [text, setText] = useState("");
  return (
    <List>
      <ListItem>
        <TextField
          label="Add Todo"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Button onClick={() => addTodo({ text }).then(() => setText(""))}>
          submit
        </Button>
      </ListItem>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default compose(
  addTodo,
  getTodos,
  connect(state => state),
  prepared(props => {
    if (props.loading || props.todos.length) {
      return Promise.resolve();
    }
    return props.getTodos();
  })
)(TodoPage);
