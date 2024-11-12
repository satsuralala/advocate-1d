import { Task } from "@/graphql/models/Tasks";

export const getFinishedTasksLists = async() => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
=======
  
>>>>>>> Stashed changes
    return await Task.find({isDone:true});
  };
  