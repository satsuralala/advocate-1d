import { Task } from "@/models/Tasks";

export const addTask = async (_: unknown, { taskName, priority }: { taskName: string, priority:string }) => {
  const newTask=new Task({
    taskName,
    isDone:false,
    priority,
    createdAt:new Date(),
  })
  await newTask.save();

  return newTask;
};

export const updateTask= async(_:unknown, {_id,taskName, priority,isDone}:{_id:string; taskName?:string; priority?:number;isDone?:boolean})=>{
  const updatedTask=await Task.findByIdAndUpdate(
    _id,{
      taskName,
      priority,
      isDone,
      updatedAt:new Date(),
    },
    {new:true}
  )
  return updatedTask;
}
