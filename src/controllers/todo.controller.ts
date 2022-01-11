import { TodoDto } from "../dtos/todo.dto";
import { Body, Get, JsonController, Post } from "routing-controllers";

@JsonController("/todo")
export class TodoController {
  todos: TodoDto[];
  constructor() {
    this.todos = [];
  }

  @Get("/")
  getAll() {
    return this.todos;
  }

  @Post("/")
  post(@Body() todo: TodoDto) {
    this.todos.push(todo);
    return todo;
  }
}
