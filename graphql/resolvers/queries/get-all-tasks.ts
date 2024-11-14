import { Task } from "@/graphql/models/Tasks";

export const getAllTasks = async () => {
  try {
    const res = await Task.find({});
    return res;
  } catch (error) {
    return error;
  }
};
