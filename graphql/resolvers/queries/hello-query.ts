import { Task } from "@/models/Tasks";

export const getDoneTasksLists = async() => {
  return await Task.find({isDone:true});
};

export const getAllTasks=async()=>{
  return await Task.find({isDone:Boolean});
}
