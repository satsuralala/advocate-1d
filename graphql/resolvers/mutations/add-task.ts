import { Task } from "@/graphql/models/Tasks";

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
export const addTask = async (
  _: unknown,
  { taskName, priority }: { taskName: string; priority: number }
) => {
  if (!taskName) {
<<<<<<< Updated upstream
    throw new Error("task cannot be empty");
=======
    throw new Error(" taskName cannot be empty");
>>>>>>> Stashed changes
  }
  try {
    const newTask = await Task.create({
      taskName,
      isDone: false,
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
      priority,
      createdAt: new Date(),
    });
    return newTask;
  } catch (error) {
    console.log(error);
  }
};
<<<<<<< Updated upstream


>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
