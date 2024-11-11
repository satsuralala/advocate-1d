
import { addTask, updateTask } from "./mutations/say-hello";
import { getAllTasks, getDoneTasksLists } from "./queries/hello-query";

export const resolvers = {
  Query: {
   getDoneTasksLists,
   getAllTasks,
  },
  Mutation: {
   addTask,
   updateTask,
  },
};
