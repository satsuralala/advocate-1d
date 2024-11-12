import { Task } from "@/graphql/models/Tasks";

export const getFinishedTasksLists = async() => {
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
    return await Task.find({isDone:true});
  };
  