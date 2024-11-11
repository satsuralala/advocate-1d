import { Task } from "@/graphql/models/Tasks";

export const getAllTasks=async()=>{
    return await Task.find({});
  }
  