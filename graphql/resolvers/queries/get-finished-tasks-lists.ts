import { Task } from "@/graphql/models/Tasks";

export const getFinishedTasksLists = async() => {
  
    return await Task.find({isDone:true});
  };
  