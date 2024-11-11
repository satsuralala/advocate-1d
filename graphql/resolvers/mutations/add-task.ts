import { Task } from "@/graphql/models/Tasks";

export const addTask = async (_: unknown, { taskName, priority }: { taskName: string, priority:number }) => {
  try{
    const newTask=await Task.create(
      {taskName,
      isDone:false,
      priority,
      createdAt:new Date(),}
    )
    return newTask;
  }catch(error){
    console.log(error)

  }
};


