import { Task } from "@/graphql/models/Tasks";

export const updateTask = async (
  _: unknown,
  {
    _id,
    taskName,
    priority,
    isDone,
  }: { _id: string; taskName?: string; priority?: number; isDone?: boolean }
) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      {
        taskName,
        priority,
        isDone,
        updatedAt: new Date(),
      },
    );
    return updatedTask;
  } catch (error) {
   return error;
  }
};
