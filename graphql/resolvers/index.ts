import { addTask } from "./mutations/add-task";
import { sayHello } from "./mutations/say-hello";
import { updateTask } from "./mutations/update-task";
import { getAllTasks } from "./queries/get-all-tasks";
import { getFinishedTasksLists } from "./queries/get-finished-tasks-lists";
import { helloQuery } from "./queries/hello-query";



export const resolvers = {
  Query: {
    helloQuery,
    getFinishedTasksLists,
    getAllTasks,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
  },
};
