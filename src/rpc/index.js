const Todos = __NODE__ && require("../db").default;

export default {
  addTodo: async ({ text }) => await Todos.query().insertAndFetch({ text }),
  editTodo: async ({ id, text, completed }) =>
    await Todos.query().patchAndFetchById(id, { text, completed }),
  deleteTodo: async ({ id }) => {
    await Todos.query().deleteById(id);
    return { id };
  },
  getTodos: async () => await Todos.query()
};
