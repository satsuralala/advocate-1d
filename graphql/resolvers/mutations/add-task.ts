import { Task } from "@/graphql/models/Tasks";

<<<<<<< Updated upstream
export const addTask = async (
  _: unknown,
  { taskName, priority }: { taskName: string; priority: number }
) => {
  if (!taskName) {
    throw new Error("task cannot be empty");
  }
  try {
    const newTask = await Task.create({
      taskName,
      isDone: false,
      priority,
      createdAt: new Date(),
    });
    return newTask;
  } catch (error) {
    console.log(error);
  }
};
=======
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


>>>>>>> Stashed changes
