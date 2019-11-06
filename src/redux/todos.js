// @flow
import { withRPCReactor } from "fusion-plugin-rpc-redux-react";

export type Todo = {
  +id: string,
  +text: string,
  +completed: Boolean
};

export const addTodo = withRPCReactor("addTodo", {
  start: (state, action) => ({ ...state, error: null, loading: true }),
  success: (state, action) => ({
    ...state,
    loading: false,
    todos: [...state.todos, { ...action.payload }]
  }),
  failure: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.message
  })
});

export const deleteTodo = withRPCReactor("deleteTodo", {
  start: (state, action) => ({ ...state, error: null, loading: true }),
  success: (state, action) => ({
    ...state,
    loading: false,
    todos: [...state.todos.filter(todo => todo.id !== action.payload.id)]
  }),
  failure: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.message
  })
});

export const editTodo = withRPCReactor("editTodo", {
  start: (state, action) => ({ ...state, error: null, loading: true }),
  success: (state, action) => ({
    ...state,
    loading: false,
    todos: [
      ...state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      )
    ]
  }),
  failure: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.message
  })
});

export const getTodos = withRPCReactor("getTodos", {
  start: (state, action) => ({ ...state, error: null, loading: true }),
  success: (state, action) => ({
    ...state,
    loading: false,
    todos: action.payload
  }),
  failure: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.message
  })
});
