import App from "@/app";
import { IndexController } from "@controllers/index.controller";
import { TodoController } from "@controllers/todo.controller";

const app = new App([IndexController, TodoController]);
app.listen();
