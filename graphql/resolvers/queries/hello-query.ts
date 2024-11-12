import { Task } from "@/graphql/models/Tasks";

export const helloQuery = () => {
  return "This is hello Query";
};

export const getAllTasks=async()=>{
  return await Task.find({isDone:Boolean});
}
