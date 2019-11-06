import { Model } from "objection";
import Knex from "knex";

const knex = Knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "todos.db"
  }
});

Model.knex(knex);

export default class Todos extends Model {
  static get tableName() {
    return "todos";
  }
}
