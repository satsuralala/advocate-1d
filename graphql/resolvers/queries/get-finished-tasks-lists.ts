import { Task } from "@/graphql/models/Tasks";

export const getFinishedTasksLists = async () => {
  try {
    const res = await Task.find({ isDone: true });
    return res;
  } catch (error) {
    return error;
  }
};
